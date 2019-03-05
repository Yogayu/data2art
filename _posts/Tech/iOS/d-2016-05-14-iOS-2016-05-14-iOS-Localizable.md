---
layout: post
lang: en
title: 让你的App说出多国语言——iOS开发之本地化(国际化)
keywords: iOS, 本地化, 国际化
description: iOS开发之本地化
time: 10
author: 游薪渝
bio: '去创造，去体验。<br> To create, To experience.'
image: false
tags: [iOS]
---

## 本地化的重要性

当你的App上架AppStore之后，便可以在全球范围内销售了。
如果想App在世界各地更畅销，那么本地化一定是不可少的。

本文将简明的从Info.list、Storyboard、Code String和XML四种方式来讲解本地化。

<!-- more -->

Info.list即将一些基本设置本地化，例如App在主屏幕显示的名称；Storyboard即界面显示内容的本地化；Code String则是你在代码中设置的一些语句的本地化，比如通知提醒等；最后一种XML方式则更为通用，直接将需要本地化的内容导出，修改之后再导入。

当然，本文只涉及本地化的技术层面，而不涉及具体如何翻译。


## 如何本地化？

### Info.list
    
本地化App名

选中Info.plist,如图点击添加：

![Info_plist1](/assets/qiniu/2016-05-14-Info_plist1.png)

添加Bundle display name，Value为App名。

![Info_plist2](/assets/qiniu/2016-05-14-Info_plist2.png)

新建String File类文件，命名为InfoPlist，注意命名的大小写。

![location3](/assets/qiniu/2016-05-14-location3.png)

<!-- more -->

选中新建的文件，InfoPlist.strings，在Xcode的File inspection中点击Localize。
![InfoPlist_strings4](/assets/qiniu/2016-05-14-InfoPlist_strings4.png)

当然，本地化内容之前，需要添加将本地化的语言。

编辑Project，在Info下，如图点击添加：

![5](/assets/qiniu/2016-05-14-5.png)

即可添加你想本地化的语言。

然后在目录中你会看到：

![6](/assets/qiniu/2016-05-14-6.png)

编辑InfoPlist.strings即可设置。格式为：
```swift
    "Key" = "Value";
```
因为是C语言风格，记得加**分号**。


举个例子，本地化我们的App名，首先需要知道Key。

选中info.plist，在任意条目中右击，如图进行选择：

![Info_plist7](/assets/qiniu/2016-05-14-Info_plist7.png)

你将看见：

![Info_plist8](/assets/qiniu/2016-05-14-Info_plist8.png)


复制粘贴到InfoPlist.strings

```swift
"CFBundleDisplayName" = "GuitarFere";
```
对于不同语言，在对于的InfoPlist.strings中修改对应Value即可。

比如：
```swift    
"CFBundleDisplayName" = "吉他伴侣";

"CFBundleDisplayName" = "吉他伴侶";

"CFBundleDisplayName" = "ギターコンパニオン";
```

### Storyboard/Xib

同理，首先选择要本地化的Storyboard，在File inspection中点击Localize，如果你在前一步中已经将Storyboard本地化，则可以跳过此步。


![Main_storyboard1](/assets/qiniu/2016-05-14-Main_storyboard1.png)


Xcode会自动为你生成对应的Key-Value，对应修改即可：

 ![Main_strings2](/assets/qiniu/2016-05-14-Main_strings2.png)

option+Command+return快捷键，选择preview：

![Main_storyboard3](/assets/qiniu/2016-05-14-Main_storyboard3.png)

点击右下角语言，预览效果：

![9](/assets/qiniu/2016-05-14-9.png)

### Code String

有时候，你想要本地化的内容是在代码中指定的。

首先，在代码中将你要本地化的字符串，使用如下进行定义

```swift
    NSLocalizedString("Key", comment: "comment")
```

比如：

{% highlight swift %}
    fun loadSampleSettingList()  {
        let help_1 = NSLocalizedString("help_1", comment: "Saved settings")
        let help_2 = NSLocalizedString("help_2", comment: "Press + to add")
        let help_3 = NSLocalizedString("help_3", comment: "Swipe left to delete")
        
        let setting_1 = SettingList(tempo: 80, beat: 4, note: 4,
                                    handlePoint: 144, name: help_1)!
        let setting_2 = SettingList(tempo: 100, beat: 8, note: 4,
                                    handlePoint: 181,name: help_2)!
        let setting_3 = SettingList(tempo: 120, beat: 3, note: 4,
                                    handlePoint: 216, name: help_3)!
        
        settingList += [setting_1,setting_2,setting_3]
    }
{% endhighlight %}
再比如：
{% highlight swift %}
@IBAction fund mailBtnDidTouched(sender: AnyObject) {
   let sendTitle = NSLocalizedString("sendFeedback", comment: "send feedback to me")
   let sendMessage = NSLocalizedString("sendMessage", comment: "send feedback message")
   let okTitle = NSLocalizedString("Send_Ok", comment: "accept to send")
   let cancel = NSLocalizedString("Cancel", comment: "cancel send")
   
   let alert = UIAlertController(title: sendTitle, message: sendMessage, preferredStyle: UIAlertControllerStyle.Alert)
   self.presentViewController(alert, animated: true, completion: nil)
   let defaultAction = UIAlertAction(title: okTitle, style: UIAlertActionStyle.Default) { (UIAlertAction) -> Void in
       
       let email = "yudelovesong@icloud.com"
       let url = NSURL(string: "mailto:\(email)")
       UIApplication.sharedApplication().openURL(url!)
   }
   let cancelAction = UIAlertAction(title: cancel, style: UIAlertActionStyle.Cancel, handler: nil)
   
   alert.addAction(defaultAction)
   alert.addAction(cancelAction)
}
{% endhighlight %}

然后，同理，新建一个String File类文件，命名为Localizable，注意命名的大小写。

现在你需要写对应的Key-Value，有没有想过，如果你有很多需要本地化的字符串，纯手写Key-Value是一件很麻烦的事情？所以我们可以使用自动生成的方式。

打开终端，输入：

```swift
gensstrings 
```

空格之后，在Finder中将你含有本地化字符串的文件拖入终端（当然，你也可以手写自动遍历）


![genstrings](/assets/qiniu/2016-05-14-genstrings.png)


回车执行，在对应的Finder目录中，会生成Localizable.strings文件：


![genstringsSting](/assets/qiniu/2016-05-14-genstringsSting.png)


该文件内容即自动生成的Key-Value。


### XML
最后一种方式，不需要你手动的去选择和添加文件，可以直接导出所有需要本地化的内容为XML，进行更改，最后再导入即可。

选中项目之后（不要忘记这一点），在Editor中选中Export For Localization：

导出之后的文件：
![GuitarFere](/assets/qiniu/2017-06-21-GuitarFere.png)

编辑对应的文件：

![zh-Hans_xliff](/assets/qiniu/2017-06-21-zh-Hans_xliff.png)

完成之后，再进行导入：

![Editor_和_Menuba](/assets/qiniu/2017-06-21-Editor_%E5%92%8C_Menubar.png)

![截屏16_5_15_下午5_47](/assets/qiniu/2017-06-21-%E6%88%AA%E5%B1%8F16_5_15_%E4%B8%8B%E5%8D%885_47.png)


最后，以上四种方式，什么时候使用哪一种，按自己的需求选择就可以了。

## 参考

- [WWDC 2014 412](https://developer.apple.com/videos/play/wwdc2014/412/)
- iOS Programming Foundation with Swift Chapter 9


