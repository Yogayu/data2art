---
layout: post
title: '基于感知哈希算法的相似照片识别'
postPatterns: ticTacToe
time: 6
keywords: 相似照片识别, 知哈希算法
descripation: 使用感知哈希算法进行相似照片识别
category: Tech
author: 游薪渝
tags: [Algorithm, iOS]
bio: '去创造，去体验。<br> To create, To experience.'
cover: /assets/img/HashPhoto/0.png
---

<img src="/assets/img/HashPhoto/0.png" height="600">

在我们最新做的App中，有一个自动找出相似照片并展示的功能。其中，相似照片的查找就是使用的感知哈希算法。那么什么是感知哈希算法？其原理又是什么呢？

感知哈希算法用于计算出各种形式多媒体的指纹或快照。

如果你接触过密码学，应该知道在密码哈希中，输入的微小变化都会产生雪崩效应，使得输出值产生巨大变化。而感知哈希恰恰相反，如果其特征是相似的，那么感知哈希产生出的结果，也就会相似的。因此感知哈希函数被广泛用于查找在线版权侵权案件以及数字取证中。

常用的感知哈希算法有三种：aHash 算法（Average Hash, 均值哈希算法），dHash 算法（差值哈希算法）和 pHash 算法（Perceptual Hash）。

在相似照片检测中，我们可以想象为，使用感知哈希算法，对每张照片生成一个指纹，然后比较不同照片之间的指纹差异。差异越小，照片越相似。

## aHash 算法

### **第一步 缩小尺寸**

将图片缩小到8x8的尺寸, 总共64个像素。这一步的作用是去除各种图片尺寸和图片比例的差异, 只保留结构、明暗等基本信息。

![](/assets/img/HashPhoto/1.png)

### **第二步 转为灰度图片**

将缩小后的图片, 转为64级灰度图片。

![](/assets/img/HashPhoto/2.png)

### **第三步 计算灰度平均值**

计算图片中所有像素的灰度平均值

### **第四步 计算哈希值**

将每个像素的灰度与平均值进行比较, 如果大于或等于平均值记为1, 小于平均值记为0。对每个像素执行此操作，最终得到64位的二进制整数哈希，即图片的指纹。

### **第六步 对比图片指纹**

得到图片的指纹后, 就可以对比不同的图片的指纹。这里我们计算**汉明距离**，即找出 64 位中有多少位是不一样的。

例如我们有一张原图的 Hash 值 和一张加水印图的 Hash 值：

    Original a: 
    1100100101101001001111000001100000001000000000000000011100111111
    Watermark b:
    1100100101111001001111000001100000011000000010000000011100111111

汉明距离等于 a 异或 b（a⊕b），可以看出只有 3 位不同，所以其相似度为 (64-3)/64 = 95.31%。

基于 Open CV 的简单实现：
```python
import cv2

def calculateAvg(gray):
    s = 0
    for i in range(8):
        for j in range(8):
            s = s + gray[i,j]
    average = s / 8 * 8
    return average

def generate_aHash(gray, avg):
    aHash_str = ""
    for i in range(8):
        for j in range(8):
            if gray[i,j] > avg:
                aHash_str += "1"
            else:
                aHash_str += "0"
    return aHash_str

def aHash(img):
    # 缩放 8*8
    img = cv2.resize(img, (8,8), interpolation=cv2.INTER_CUBIC)
    # 转化为灰度图
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # 计算灰度均值
    avg = calculateAvg(gray)
    # 计算均值哈希
    aHash_str = generate_aHash(gray, avg)
    return aHash_str
```

## dHash 算法

dHash算法与aHash算法步骤相同，只是在生成指纹时，使用不同的方法。

在aHash算法中，我们与平均哈希进行比较。而在dHash算法中，是基于每一行左边像素是否大于右边像素来生成指纹，而不是使用单个平均值。与“平均哈希”相比，它产生的误报更少。
```python
import cv2

def generate_dHash(gray):
    dHash_str = ""
    for i in range(8):
        for j in range(7):
            # 每行左边像素大于右边像素为1，反之为0
            if gray[i, j] > gray[i, j + 1]:
                dHash_str += "1"
            else:
                dHash_str += "0"
    return dHash_str

def dHash(img):
    # 缩放 8*8
    img = cv2.resize(img, (8,8), interpolation=cv2.INTER_CUBIC)
    # 转化为灰度图
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # 计算差值哈希
    dHash_str = generate_dHash(gray)

    return dHash_str
```

## pHash 算法

pHash 算法原理不同于前两种，它的精度更高，当然相应的计算量更大，计算时间更长，是三种中最慢的。

PHash算法可分为以下几个步骤：

1. 首先将尺寸缩小为 32x32 大小；
2. 将彩色图转为灰度图；
3. 获取每个像素的 Luma（亮度）值，并在矩阵上应用离散余弦变换（DCT），使用32*32的DCT变换；
4. DCT的结果是32*32的矩阵，将代表图像中最低频率的左上 8 x 8 像素通过将每个像素与中值进行比较来计算所得的哈希值；
5. 计算DCT的平均值；
6. 根据8*8的DCT矩阵来与平均值进行比较，大于平均值的为1，小于的为0。

如果想要进一步了解，可以查看 pHash 算法的一个开源实现库： [http://www.phash.org/docs/](http://www.phash.org/docs/)。

## 三者比较

[三者比较](https://www.notion.so/a4509cc5ab9b4246b0e1175ae170aa5e)

考虑到移动端性能，我们使用时是用的 dHash 算法，主要库为 CocoaImageHashing。另外，根据实际使用情况看来，dHash 只需要向相似度阈值设高（目前我们设置为8），效果很好。

实际在设计相似照片检测时，为了提高速度和性能，我们还设计了局部比较策略。具体相似照片策略设计，就留到下一篇文章吧。

## 参考

- [https://www.phash.org/docs/pubs/thesis_zauner.pdf](https://www.phash.org/docs/pubs/thesis_zauner.pdf)
- [https://en.wikipedia.org/wiki/Perceptual_hashing](https://en.wikipedia.org/wiki/Perceptual_hashing)
- [https://miketech.it/perceptual-hash-algorithm](https://miketech.it/perceptual-hash-algorithm)
- [https://jenssegers.com/perceptual-image-hashes](https://jenssegers.com/perceptual-image-hashes)
- [https://content-blockchain.org/research/testing-different-image-hash-functions/](https://content-blockchain.org/research/testing-different-image-hash-functions/)
- [https://zhuanlan.zhihu.com/p/63180171](https://zhuanlan.zhihu.com/p/63180171)
- [https://yongyuan.name/blog/improve-phash-for-copy-detection.html](https://yongyuan.name/blog/improve-phash-for-copy-detection.html)