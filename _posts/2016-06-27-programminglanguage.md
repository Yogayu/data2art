---
layout: post
lang: en
title: 关于编程语言的思考（上）Thinking of the Programming Language (Part 1)
keywords: 编程语言, 语言设计
description: 编程语言的思考Thinking of the Programming Language
image: false
time: 8
tags: [Techology]
---



## 问题 Problems

- 什么是编程语言？有哪些？各自是什么类型？<br>What is programming language? How many programming language we have? How many types?
- 语言的基本组成要素是什么？<br>What's the core foundations of programming language？
- 为什么有那么多的编程语言? <br>Why there are so many programming language?
- 语言之间的相同点和异同点是什么？What are the similarities and differences among those languages?
- 为什么有时候创造一门新语言能更好的解决问题？<br>Why sometimes creating a new language is a better way to solve problems?
- 如何实现一门编程语言？<br>How to implement a programming language
- 我学过哪些编程语言?<br> How many programming languages I have learned?
 
 <!-- more -->

        - C
        - C++
        - 汇编
        - Java
        - C#
        - HTML/CSS
        - JavaScript
        - Swift
        - Cobol、JCL
        - PHP
        - Objective-C


---

## 什么是编程语言？What is programming language?
人类语言的一大目的是为了沟通，计算机编程语言也是如此。只是编程语言的沟通对象是人与机器。计算机本身很“笨”，因为它所做的所有事情[ [^1] ]都需要命令指挥。而这些命令就是人们使用编程语言来编写的。<br>One of the main function of human language is to communicate, so does the computer programming language. But  it's a communication between the computers and human beings. The computer is quite "stupid" since it only does the instructions which have been told. Those instructions, written by human beings, are programming languages. 

[^1]: 从本质上来看，计算机能做的事情就是计算，不是吗？Actually, the computer can do nothing but computation, isn't it?



## 语言类型 What's the type of programming languages?

你可能听过不少语言的分类标准，比如，从语言的等级来分，有低级语言(汇编)、中级语言(`C`)和高级语言(C++，java)。从语言的实现角度来分，有编译型语言(C、C++，Pascal)、解释型语言(php，lisp)和以上两者的混合型语言(Java，Python)。从语言类型是否在编译时确定，也可以分为静态语言（C++，Java）和动态语言（JavaScript）。或者，我们可以从编程风格(编程范式)来分，有面向对象、函数式和逻辑式。当然一种语言可能属于其中的几种类别。<br>You may have heard different standard of classification.For example, we can divide them from the language level: low level, medium level and high level. We can see from the language Implementation:  Interpreted、Compiled、Hybrid Language Implementations. Or we can divide from the style: Imperative/Object-Oriented Programming, Functional Programming, Logic Programming.  

<figure class="sidebar">
  <img
    src="http://7xle3b.com1.z0.glb.clouddn.com/2016-07-24-%E7%BC%96%E8%AF%91%E5%99%A8.jpg"
    alt="编译器">
  <figcaption>编译器</figcaption>
  <img
    src="http://7xle3b.com1.z0.glb.clouddn.com/2016-07-24-%E8%A7%A3%E9%87%8A%E5%99%A8.jpg"
    alt="解释器">
  <figcaption>解释器</figcaption>
</figure>

举个例子，如何区分编译型和解释型呢？一个程序，要让计算机执行，必须是计算机所能理解的形式。编译器可以把用某种编程语言写成的程序（源语言），转换成另一种编程语言（目标语言）。解释器不是通过直接翻译，而是直接一行一行的解释执行。<br>How to distinguish between compiled language and interpreted language? A program must be translate to the form which the computer can execute. The complier does the translation from the source language to target language. While the Interpreter directly execute the operations in the source program.

wiki分类[^2]

[^2]:[来源](https://zh.wikipedia.org/wiki/ALGOL)

![https_zh_wikipedia_org_wiki_ALGO](http://7xle3b.com1.z0.glb.clouddn.com/2016-07-24-https___zh_wikipedia_org_wiki_ALGOL.png)


*编译原理课上，老师推荐学习四门语言，C语言，汇编，脚本语言，Lisp。课后问他为什么没有面向对象的语言，他说面向对象是一种设计。不过，我自己还是坚持面向对象的语言是必学的。*

## 语言的基本组成要素是什么？What’s the core foundations of programming language？

因为我个人接触语言的局限性，目前只做了如下的思考，欢迎各位讨论，提出自己的见解。<br>The following thinking is based on my own limit experience with programming language, so please feel free to offer your own opinions and discuss with me.

学习一门语言，会学习其语法，以及其对应的语义。语法定义了程序的组织书写形式。语义描述程序将如何被执行。

> Syntax of a programming language determines the well-formed or grammatically correct programs of the language. Semantics describes how or whether such programs will execute. 

- Syntax is how things look 
- Semantics is how things work (the meaning)


### 过程 process
- 表达式 expression
    - 语句 statement
        - 声明 declare 常量与变量
        - 赋值
    - 判断 judge
        - if-else
        - switch-case
    - 循环 loop
        - while / do while
        - for
        - if
- 操作operation
    - + - * / %
    -  :? || && ! >> <<

- 数据类型 data type (the value and the operation)
    - 原始类型 primitive type
        - 数值型 numberic: short,int,float,double,long
        - 字符 string:char,string
        - 空 nil
    - 高级类型 advanced type
        - enumeration
        - dictionary
        - array
        - struct
        - generic

- 函数 function
    - type-return
    - name

### 面向对象 object-oriented

- 类 class
    - attribute
    - function(method)
    - construct-deconstruct
- 继承 inherit
    - 单继承、多继承
- 多态
    - 重载
- 接口 interface
- 协议 delegate

---

SCIP:
- 过程抽象
- 数据抽象

## Reference:
- [Programming Language](https://www.amazon.com/Programming-Languages-Active-Learning-Approach/dp/0387794212)
- [Complier](https://www.amazon.com/Compilers-Principles-Techniques-Tools-2nd/dp/0321486811?ie=UTF8&*Version*=1&*entries*=0)
- https://zh.wikipedia.org/wiki/ALGOL
- SCIP


