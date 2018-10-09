---
layout: post
lang: en
title: IBM个人赛Part1、Part2小结
time: 5
image: false
tags: [Techology]
---

## 1.  先过脑子，再过机子
用小黑箱调试，没有办法设置断点，没有提示错误(后来上了大型机的课，也就会调试和看错误了)，只有自己不断的试错。添一段代码之后运行，对了再一点点的添，错了就不断缩小问题范围。

<!-- more -->

## 2. 要注意细节问题

太久没写C语言，逻辑上大多不会出错，会在基本的语法上出错。比如，本来应该是全局变量却声明为了main函数中的局部变量，单词拼写错误，未声明就使用。虽然很费事，但是也很难忘。



1. zOS

    - 连接port

    - 登录logon

    - 登出logoff
2. linux 基本命令 修改权限
    - man，ls，cat打印到屏幕，less显示内容（大文件），mkdir，cd，cp，echo，chmod（修改权限 r,w,x ），which comandLine

    - 绝对地址与相对地址 ‘/z/bin’,’./(inside)’,’../(parent)'

3. 主界面 ISPF

    - 数据管理 命令=3.4

    - 数据类型 sequential data set,  file ;partitioned data set.  a folder or a directory, members : files.

    - 添加数据 =2 PDSNAME(Membername)

    - 文本编辑 i d r
    - =6 Command Shell 执行命令 EXEC 'ZOS.PUBLIC.REXX(COUNT)' 'your_name'

4. 编码，ASCII，EBCDIC
    - hex on/off , hx
5.  JCL 运行某程序

    - 提交：tso submit jcl(sortjcl)

    - 查看状态：sub; =sd ; st
6. JSON,COBOL 面向企业
7. z/OS unix：
    - 进入：tso omvs
    - 拷贝文件：cp cp unameinfo "//‘CN00474.P2.OUTPUT(\$010)'"
8. Transaction Processing Facility (TPF) 文件
    - JSON
    - MongoDB
        - db.getCollection(’PNR’).find({PnrByNumber: {number: 88440}})
db.getCollection('PNR').find({PnrByName: {name: "JRTyler"}})
72 Quincy, Evanston, Illinois
9. blue mix 构建云应用

10. 运行不同语言的程序，编译，连接，运行
    - Source(POKER)-run by-> JCL(POKERCMP)-output-> LOAD(POKER)－run by－>jcl(POKRUN16)->output result.
    - tso submit jcl(POKERCMP)
    - tso submit jcl(POKRUN16)

11. 修改程序
    - 小步加进式的调试
    
## 后记
之后也选修大型机课程，再来看个人赛觉得是简单了很多，又系统的了解更多的大型机知识，当然多数时间在学习JCL和COBOL程序设计，不得不说编写大型机应用，更需要耐心。

