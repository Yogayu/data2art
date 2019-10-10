---
layout: post
lang: zh
title: 【知识卡片】Autorelease 简介
keywords: autorelease, autoreleasepool
description: autorelease简介
image: false
author: 游薪渝
bio: '去创造，去体验。<br> To create, To experience.'
time: 15
tags: [iOS, 知识卡片]
cover: /assets/img/iOS/card.jpeg
---

## autorelease

类似于 C 语言中的局部变量作用域。当程序运行时，局部变量超出其作用域，就会被自动废弃。autorelease 可以以同样的方法来管理其中的对象。当超出设定的 autorelease 作用域时，会调用对象的 realease 方法。



示例：

```objective-c
NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
id obj = [[NSObject alloc] init];
[obj autorelease];
[pool drain];
```

## autoreleasepool

以 @autoreleasepool 标记开头的 Block。

```objective-c
@autoreleasepool {
    // Code that creates autoreleased objects.
}
```

在自动释放池块的末尾，向在该块内接收到autorelease的象发送release消息。每次在该块内向其发送autorelease消息时，对象都会收到一条release消息。

可以嵌套使用：

```Objective-C
@autoreleasepool {
    // . . .
    @autoreleasepool {
        // . . .
    }
    . . .
}
```

每个Cocoa的线程都会默认标配一个Autorelease Pool。

AppKit和UIKit框架处理自动释放池块中的每个事件循环迭代（例如，鼠标按下事件或轻击）。因此，通常不必自己创建一个自动释放池块。但是，在三种情况下，可能会使用自己的自动释放池块：

1. 编写不基于UI框架的程序，例如命令行工具。

2. **编写一个会创建很多临时对象的循环**。

   可以在循环内使用自动释放池块在下一次迭代之前处理这些对象。在循环中使用自动释放池块有助于减少应用程序的最大内存占用。

3. 生成辅助线程。

   在线程开始执行后立即创建自己的自动释放池块；否则，您的应用程序将泄漏对象。([Autorelease Pool Blocks and Threads](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/mmAutoreleasePools.html#//apple_ref/doc/uid/20000047-1041876))

### 使用局部自动释放池块来减少峰值内存占用量

第2中情况示例：

```Objective-C
- (void)useALoadOfNumbers {
    for (int j = 0; j < 10000; ++j) {
        @autoreleasepool {
            for (int i = 0; i < 10000; ++i) {
                NSNumber *number = [NSNumber numberWithInt:(i+j)];
                NSLog(@"number = %p", number);
            }
        }
    }
}

func useManyImages() {
    let filename = pathForResourceInBundle

    for _ in 0 ..< 5 {
        autoreleasepool {
            for _ in 0 ..< 1000 {
                let image = NSImage(contentsOfFile: filename)
            }
        }
    }
}
```

看一个YYKit中的使用示例：

```Objective-C
- (void)runImageDecodeBenchmark {
    printf("==========================================\\n");
    printf("ImageIO Decode Benchmark\\n");
    printf("name    size type quality length decode_time\\n");
    
    for (NSString *imageName in self.imageNames) {
        for (NSNumber *imageSize in self.imageSizes) {
            for (NSString *imageSource in self.imageSources) {
                for (NSString *imageType in @[@"png", @"jpg"]) {
                    @autoreleasepool {
                        NSString *fileName = [NSString stringWithFormat:@"%@%@_%@",imageName, imageSize, imageSource];
                        NSString *filePath = [[NSBundle mainBundle] pathForResource:fileName ofType:imageType];
                        NSData *data = filePath ? [NSData dataWithContentsOfFile:filePath] : nil;
                        if (!data) continue;
                        int count = 100;
                        YYBenchmark(^{
                            for (int i = 0; i < count; i++) {
                                CGImageSourceRef source = CGImageSourceCreateWithData((__bridge CFTypeRef)data, NULL);
                                CGImageRef image = CGImageSourceCreateImageAtIndex(source, 0, (CFDictionaryRef)@{(id)kCGImageSourceShouldCache:@(NO)});
                                CGImageRef decoded = YYCGImageCreateDecodedCopy(image, YES);
                                CFRelease(decoded);
                                CFRelease(image);
                                CFRelease(source);
                            }
                        }, ^(double ms) {
                            printf("%8s %3d %3s %10s %6d %2.3f\\n", imageName.UTF8String, imageSize.intValue, imageType.UTF8String, imageSource.UTF8String, (int)data.length, ms / count);
                        });
                        
#if ENABLE_OUTPUT
                        if ([UIDevice currentDevice].isSimulator) {
                            NSString *outFilePath = [NSString stringWithFormat:@"%@%@.%@", IMAGE_OUTPUT_DIR, fileName, imageType];
                            [data writeToFile:outFilePath atomically:YES];
                        }
#endif
                    }
                }
            }
        }
    }
    
    printf("------------------------------------------\\n\\n");
}
```

### Cocoa 中类方法

NSArray 操作 Api：

```Objective-C
- (void)enumerateObjectsUsingBlock:
- (void)enumerateObjectsWithOptions:(NSEnumerationOptions)opts usingBlock:
- (void)enumerateObjectsAtIndexes:(NSIndexSet *)s options:(NSEnumerationOptions)opts usingBlock:
```

NSMutableArray 中 arrWithCapacity 类方法：

```Objective-C
id array = [NSMutableArray arrWithCapacity:1]
// equal
id array = [[[NSMutableArray alloc] initWithCapacity:1] autorealease];
```

## 参考

- https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/mmAutoreleasePools.html#//apple_ref/doc/uid/20000047-1041876+ +"Autorelease Pool Blocks and Threads"
- https://stackoverflow.com/questions/9086913/why-is-autoreleasepool-still-needed-with-arc/9087002#9087002