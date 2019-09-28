---
layout: post
lang: en
title: iOS 基础知识框架
keywords: iOS, 知识体系
description: iOS 基础知识框架
image: false
author: 游薪渝
bio: '去创造，去体验。<br> To create, To experience.'
time: 15
tags: [iOS]
cover: /assets/blog-img/book.jpeg
---

![iOS 基础知识框架](/assets/img/iOS/iOS基础知识体系.png)

## 1 UI 基础

### ViewController 的生命周期

### TableView

- TableView Cell重用机制

- 数据同步

### 事件传递和视图响应

- UIView和CALayer的关系

- 事件传递机制

	- HitTest

	- pointInside

- 视图响应机制

### 图像显示原理

- CPU

- GPU

### 卡顿/掉帧原理

- 原因

- 滑动优化

	- CPU

	- GPU

		- 离屏渲染

			- 何时出发

			- 如何避免

### 绘制原理&异步绘制

- 绘制原理

- 异步绘制

## 2 Objective-C 语言基础

### 分类

### 扩展

### 代理

### 通知

### 属性关键字

- 读写

- 原子性

- 内存管理

### KVO/KVC

## 3 RunTime

### 数据结构

- 

### 类对象与元类对象

### 消息传递&方法缓存

### 消息转发机制

### Method-Swizzing

- class_getClassMethod(

- method_exchangeImplementations

### 动态添加方法

- + resolveInstanceMethod:方法里面添加class_addMethod（self，@selector(test),testImp,”v@:”);

### 动态方法解析

- @dynamic

## 4 内存管理

### 内存布局

### 三种内存管理方案

- SideTables 数据结构

### ARC&MRC

### 引用计数实现

- alloc

- retain

- release

- retainCount

- dealloc

### 弱引用实现

### 自动释放池

### 循环引用

## 5 Block

### 是什么

### 截获变量

- 类型

	- 静态局部变量

	- 局部变量

	- 静态全局变量,全局变量（不截获）

### __block

- 一般情况下，对被截获变量进行赋值操作需要添加__block修饰符

### Block内存管理

- 类型

- Copy

- __forwarding

## 6 多线程

### GCD

- 同步/异步&串行/并发

- dispatch_barrier_async 栅栏函数

- dispatch_group

	- A，B，C三个任务并发，D在之后执行

### NSOperation

### NSThread

- 结合runloop实现常驻线程

### 多线程和锁

## 7 RunLoop

### NSRunLoop

### 事件循环机制

### RunLoop与NSTimer

### RunLoop与多线程

- 实现常驻线程

## 实战

## 算法

## 计算机基础

### 操作系统

- 进程&线程

	- 内存中的组织方式

	- 进程状态转换

	- 进程调度

		- 上下文切换

		- 三种调度器

	- 进程同步

		- 生产者-消费者问题

		- 读写问题

	- 进程间通信 ICP

		- P,消,共,套

- 线程

	- 多线程

	- 线程和进程

- CPU调度算法

	- FIFO

	- SJF

	- 优先级

	- 时间片轮转

	- 多级优先队列

- 死锁

	- 是什么

	- 怎么处理

- 内存管理

	- 虚拟内存

	- 分页，分段，段页式

	- 页面置换算法

	- 抖动

	- 工作集

- 文件管理

	- 磁盘调度算法

### 网络

- HTTP

	- 请求，响应

		- 报文

		- 方式

	- 头部信息

	- GET/POST

	- HTTP的特点

		- 无连接

			- HTTP的持久连接

		- 无状态

			- Cookie/Session

	- HTTPS 加密方法

		- 证书，对称和非对称

- TCP/UDP

	- 区别

	- 场景

	- TCP

		- 三次握手

		- 四次挥手

- DNS解析

	- 是什么

	- 迭代和递归查询

	- 存在的问题

		- 劫持

		- 转发

		- 解决办法

- Session/Cookie

	- HTTP协议无状态特点的补偿

	- Cookie

		Cookie主要用来记录用户状态，区分用户；状态保存在客户端。

		- 怎样修改Cookie

		- 怎样保证Cookie的安全

	- Session

		Session也是用来记录用户状态，区分用户；状态保存在服务器端。

		- 依赖Cookie的机制来实现

### 编译原理

- 基本过程

- XCode编译过程

## 10 第三方库

### AFNetworking

### SDWebImage

### ReactiveCocoa

### AsyncDisplayKit

## 9 架构/框架

### 图片缓存 SDWebImage

### 复杂页面架构

### 客户端整体架构

- 业务之间的解耦通信方式

	- OpenURL

	- 依赖注入

## 8 设计模式

### 六大设计原则

- 一闭口，依里迪

### 模式

- MVC

- 委托

- 桥接

- 责任链

- 适配器

- 命令