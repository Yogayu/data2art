---
layout: post
lang: en
title: 使用CocoaPods
image: false
time: 3
author: 游薪渝
bio: '去创造，去体验。<br> To create, To experience.'
tags: [iOS]
---

## CocoaPods是什么? 

当你想要用别人造好的轮子(第三方开源库，简单说，就是别人写好的功能代码)，一开始，你是不是都是下载之后，添加到自己项目中？要是项目多了是不是麻烦？而且一直在变动，有不同的版本等等。有了Cocoapods，就像有了助手，帮你管理这些轮子。你需要做的就是告诉它，你需要哪些库，什么版本。

<!-- more -->

你需要：

- 会使用终端，知道基本的命令含义，比如 cd
- 了解有的服务器在墙在外，需要更换为国内镜像
    
CocoaPods官网: https://cocoapods.org

## 如何开始？

### step 1 安装
以下命令有权限问题时，加上sudo，比如：
```swift
sudo gem install cocopods
```
- 如果你在墙外，进入终端：
```swift
gem install cocoapods
gem setup
```
- 否则，在墙内时，上面两二句先不要输入，先做些准备工作
```swift
gem sources --remove https://rubygems.org/
gem sources -a https://ruby.taobao.org/
gem sources -l
```
- 再输入:
```swift
gem install cocoapods
```
- 同样，在墙内时，
```swift 
pod repo remove master
pod repo add master https://gitcafe.com/akuandev/Specs.git
pod repo update
```        
### Step 2 配置
- 初始化:
```swift
cd yourProjectFile
pod init
```
- 配置。打开项目文件夹，打开文件Podfile,输入：
```swift
pod ‘第三方库名称’, ‘~> 版本’
```
    保存文件。

- 安装：
```swift
cd yourProjectFile  
pod install
```
### Step 3. 使用

打开项目：yourProjectName.xcworkspace

### Step 4 查找
查找你需要的：
```swift
pod search
```