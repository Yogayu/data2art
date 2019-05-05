---
layout: post
lang: zh
title: 利器|JupyterLab 数据分析必备IDE完全指南
keywords: JupyterLab, 数据分析IDE, JupyterLab Extension
description: 如果说 Jupyter Notebook 像是一个交互式的笔记本，那么 Jupyter Lab 更像是一个交互式的 VSCode。另外，JupyterLab 非常强大的一点是，你可以将它部署在云服务器，不管是电脑、平板还是手机，都只需一个浏览器，即可远程访问使用。
tags: [Tech, Data Science]
catgray: [data2art]
author: 游薪渝
bio: '去创造，去体验。'
cover: /assets/img/Lab/jupyter.jpeg
---

**[ENGLISH VERSION]({{baseurl}}/Jupyterlab-en.html)**

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [简介](#%E7%AE%80%E4%BB%8B)
  - [先尝为敬](#%E5%85%88%E5%B0%9D%E4%B8%BA%E6%95%AC)
  - [安装](#%E5%AE%89%E8%A3%85)
- [启动](#%E5%90%AF%E5%8A%A8)
  - [介绍](#%E4%BB%8B%E7%BB%8D)
  - [类型](#%E7%B1%BB%E5%9E%8B)
- [Notebook 基本功能](#notebook-%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD)
  - [Cell 类型](#cell-%E7%B1%BB%E5%9E%8B)
  - [自动补全](#%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8)
  - [问号查看详细文档](#%E9%97%AE%E5%8F%B7%E6%9F%A5%E7%9C%8B%E8%AF%A6%E7%BB%86%E6%96%87%E6%A1%A3)
  - [Magic Code](#magic-code)
    - [％timeit](#%EF%BC%85timeit)
    - [%run](#%25run)
  - [快捷键](#%E5%BF%AB%E6%8D%B7%E9%94%AE)
  - [制作 PPT](#%E5%88%B6%E4%BD%9C-ppt)
- [JupyterLab 独有的实用功能](#jupyterlab-%E7%8B%AC%E6%9C%89%E7%9A%84%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD)
  - [灵活多窗口视图](#%E7%81%B5%E6%B4%BB%E5%A4%9A%E7%AA%97%E5%8F%A3%E8%A7%86%E5%9B%BE)
  - [展开和收缩Cell](#%E5%B1%95%E5%BC%80%E5%92%8C%E6%94%B6%E7%BC%A9cell)
  - [拖拽 Cell](#%E6%8B%96%E6%8B%BD-cell)
  - [主题](#%E4%B8%BB%E9%A2%98)
  - [支持多种类型文件](#%E6%94%AF%E6%8C%81%E5%A4%9A%E7%A7%8D%E7%B1%BB%E5%9E%8B%E6%96%87%E4%BB%B6)
- [插件](#%E6%8F%92%E4%BB%B6)
  - [Awesome jupyterlab extension list](#awesome-jupyterlab-extension-list)
  - [Github Extenion](#github-extenion)
  - [Jupyter Git](#jupyter-git)
  - [Jupyterlab-toc](#jupyterlab-toc)
  - [Jupyterlab-drawio](#jupyterlab-drawio)
  - [Jupyterlab_voyager](#jupyterlab_voyager)
- [安装其他语言的 Kernel](#%E5%AE%89%E8%A3%85%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%9A%84-kernel)
  - [安装 R Kernel](#%E5%AE%89%E8%A3%85-r-kernel)
  - [安装 Julia Kernel](#%E5%AE%89%E8%A3%85-julia-kernel)
- [Notebook 资源推荐](#notebook-%E8%B5%84%E6%BA%90%E6%8E%A8%E8%8D%90)
- [总结](#%E6%80%BB%E7%BB%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

> Jupyter is not just a tool, it powers the whole innovation of the world.

## 简介

JupyterLab 是 Jupyter 团队为 Jupyter 项目开发的下一代基于 Web 的界面。相对于 Jupyter Notebook，它的集成性更强，更灵活并且更易扩展。它支持[100种多种语言](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels)，支持多种文档相互集成，实现了交互式计算的新工作流程[^1]。

如果说 Jupyter Notebook 像是一个交互式的笔记本，那么 Jupyter Lab 更像是一个交互式的 VSCode。另外，JupyterLab 非常强大的一点是，你可以将它部署在云服务器，不管是电脑、平板还是手机，都只需一个浏览器，即可远程访问使用。

使用 JupyterLab，你可以进行数据分析相关的工作，可以进行交互式编程，可以学习社区中丰富的 Notebook 资料。

在 GitHub上有超过170万个公共 Jupyter Notebook[^1]。 例如官方 [**"A gallery of interesting Jupyter Notebooks"**](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks) 中列举了如下主题的各类 Notebook：

- 编程与计算机科学
- 统计学，机器学习和数据科学
- 数学，物理，化学，生物学
- 地球科学和地理空间数据
- 语言学与文本挖掘
- 心理学和神经科学
- 机器学习，统计和概率
- 物理，化学和生物学
- 经济与金融
- 地球科学和地理空间数据

如果你是教授者，你还可以使用它进行教学，例如，可以通过安装插件，自动化检查学生的代码结果。你可以阅读这本书获取更多建议和信息：[《Teaching and Learning with Jupyter》](https://jupyter4edu.github.io/jupyter-edu-book/)。

**总之，无论你是什么专业，无论你是做什么领域，无论你是之前使用过 Jupyter Notebook，还是完全没有接触过。从现在开始，使用 JupyterLab 这一得心应手的工具，都可以提升你的工作效率，让你的体验更加美好。**

Note: 阅读本文最佳方式是**打开电脑，实际的动手试一试这些功能**。

### 先尝为敬

在安装之前，你可以直接在 Binder 中尝试使用 [JupyterLab](https://jupyter.org/try)。

![try](/assets/img/Lab/gifs/try.png)

或者查看一些 Notebooks：[https://nbviewer.jupyter.org](https://nbviewer.jupyter.org)

![view](/assets/img/Lab/gifs/view.png)

### 安装

安装十分简易，可以通过 conda, pip, 或者 pipenv 进行[安装](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html)。

```bsh
# conda
conda install -c conda-forge jupyterlab

# pip
pip install jupyterlab

# pipenv
pipenv install jupyterlab
pipenv shell
```

个人推荐使用 conda 的方式安装。

## 启动

进入到你想要使用 JupyterLab 的目录下，执行命令：

    Jupyter lab

即可启动。

![lanch](/assets/img/Lab/gifs/lanch.png)

Token 的用途是确认身份，在你打开新标签时需要输入。

### 介绍

界面：

![interfaceoverview](/assets/img/Lab/gifs/interfaceoverview.png)

其中，左边栏(command + B)从上到下默认包含：

- 文件浏览器
- 正在运行的 kernel 列表
  
    - 可以批量关闭kernel![shuoutDown](/assets/img/Lab/gifs/shuoutDown.gif)
- 命令板 (command/ctrl + shift + C)
- Cell 工具
- 已经打开的标签页

### 类型

JupyterLab 中有如下的 [block 类型](https://github.com/jupyterlab/jupyterlab-demo/tree/master/slides)：

- Notebooks 笔记本，同Jupyter Notebook
- File browser 文件浏览器
- Terminal 终端
- Text Editor 文件编辑器
- Kernels 内核
- Output 输出

## Notebook 基本功能

JupyterLab 中的 Notebook 和 Jupyter Notebook 中的使用方法一样。

### Cell 类型

![cellType](/assets/img/Lab/gifs/cellType.gif)



每一个 Notebook 就是一个kernel，在其中可以包含多个 cell。

Cell 的类型有三种，分别为：**markdown，code 和 row**。

运行 cell 的快捷键是：shift + command，大概会你用到最多次的一个快捷键。

选择 cell 之后，点击空白处，按下m键，代表转为markdown cell，y键代表转为code cell，同理r键代表转为row cell。

快捷键忘记了也没有关系，去命令板查一下就行：

![runcell](/assets/img/Lab/gifs/runcell.gif)

### 自动补全

与大多数本地 IDE 相同，输入部分代码之后按 tab 键，即可自动补全。Jupyter Lab 中的自动补全显示比之前 Jupyter Notebook 的要友好，通过不同的颜色和图标。显示出了补全的类型。



![tab](/assets/img/Lab/gifs/tab.gif)

### 问号查看详细文档

在函数或变量等后面添加一个问号(?)，执行之后，即可查看对应的详细文档:

![Introspection2](/assets/img/Lab/gifs/doc.gif)



使用两个问号(??)，会显示详细源代码信息：

![Introspection2](/assets/img/Lab/gifs/doc2.gif)

### Magic Code

IPython的一些特殊命令（不是内置于 Python 本身）被称为“魔术”命令。魔术命令是以百分号％为前缀的任何命令。

#### %matplotlib  

最常用的魔法命令，大概就是 [%matplotlib](https://ipython.readthedocs.io/en/stable/interactive/plotting.html)了。它用于指定 matplotlib 的后端(backend)。通常我们使用：

```bash
%matplotlib inline
```

代表使用 inline作为后端，直接在 Notebook 中内嵌图片，并且可以省略掉 plt.show() 这一步骤。

#### ％timeit

％timeit 函数检查任何 Python 语句的执行时间，例如：

![magic1](/assets/img/Lab/gifs/magic1.png)

#### %run

你可以使用  %run 命令，在Notebook中运行任意的Python文件。例如：

```bash
%run add.py
```

还有其他一些常用命令，例如 %debug、%load_ext 和 %pwd，完整命令可以[参考页面](https://ipython.readthedocs.io/en/stable/interactive/magics.html)。

### 快捷键

熟悉使用快捷键可以有效的帮我们提升效率，下面表格是一些常用快捷键的汇总图，可以先浏览一遍，看看自己经常会用的是什么:

![Shortcuts](/assets/img/Lab/gifs/Shortcuts.png)

[表格来源以及下载地址](https://blog.ja-ke.tech/2019/01/20/jupyterlab-shortcuts.html)：https://blog.ja-ke.tech/2019/01/20/jupyterlab-shortcuts.html



你也可以直接在设置中查看或修改相应的快捷键。

![shortcuts2](/assets/img/Lab/gifs/shortcuts2.png)



### 制作 PPT

你还可以直接通过 Notebook 制作 一份网页版的 PPT，如果你的演示文稿中包含大量的代码，这将是一个不错的选择。

[操作如下](https://github.com/jupyterlab/jupyterlab/issues/5018#issuecomment-485842330)：

1. 打开一个 NoteBook，例如 Presentation.ipynb

2. 选择左侧的 Cell Tool 标签页

3. 选择需要展示的 Cell，设置其类型为Slide

   ![presentation](/assets/img/Lab/gifs/presentation.gif)

4. 转化并运行 Presentation.ipynb: `jupyter nbconvert Presentation.ipynb --to slides --post serve`

一个PPT就制作完成啦，显示效果如下：

![presentation](/assets/img/Lab/gifs/presentation2.gif)



此外，如想要回到原来的Jupyter Notebook 也是可以的，只需要将链接后面的 Lab 改为 Tree。

如下：

![tree](/assets/img/Lab/gifs/tree.gif)

## JupyterLab 独有的实用功能

### 灵活多窗口视图

如果你使用VSCode这样强大的IDE，Jupyter Notebook 中最不令人满意的一点，就是它只支持单一的文件视图。如果你想要在一个页面上，同时使用Notebook和终端，或者想要再右侧预览markdown文件，Notebook都没有支持。但是，Jupyter Lab 具有灵活的窗口视图功能，使得上述需求能够实现。

通过拖拽的方式，可以自由的添加视图：

![muti](/assets/img/Lab/gifs/muti.gif)



还可以将输出的图片作为单独窗口查看：

![muti2](/assets/img/Lab/gifs/muti2.gif)



对于 markdown 文件，可以点击右键显示菜单，选择预览进行查看。

![markdown](/assets/img/Lab/gifs/markdown.gif)



**另外一个独特的功能是，你可以执行文本中的代码块。**

例如，在markdown文档中，有一段Python代码，可以右击，在菜单中选择新建一个console。点击代码片段任意位置之后执行(Shift+Center)：

![markdown](/assets/img/Lab/gifs/markdown2.gif)



### 展开和收缩Cell

我们注意到每一个Cell和Output左边都有一个蓝色的线，点击该蓝线，可以收拢或者展开，如果输出内容很多或者我们暂时不关心一些cell的内容时，就可以将其收拢起来。

![cellCr](/assets/img/Lab/gifs/cellCr.gif)

### 拖拽 Cell

JupyterLab 非常灵活的第一点是，每一个Cell都是可以拖拽的，你不仅仅可以在单个文件内进行拖拽，还是在文件间进行拖拽，它会自从复制cell都另一个文件中。

![drag](/assets/img/Lab/gifs/drag.gif)

### 主题

JupyterLab 自带黑白两种主题，和多种文本高亮主题。在设置菜单下即可设置主题。我们也可以更加自己的喜好，更换其他的主题。

![theme](/assets/img/Lab/gifs/theme.gif)

### 支持多种类型文件

Jupyter Lab 对不同类型的文件支持也很完善。例如 JSON 文件，csv 文件和图片文件。

![data](/assets/img/Lab/gifs/data.gif)



## 插件

通 VSCode一样，JupyterLab 也可以安装各类插件(extensions)。安装合适的插件，能够使你的效率提高很多。

JupyterLab 的插件是 npm 安装包。所以按照 JupyterLab 的插件，需要提前按照好 Node.js。

安装命令：
```
	conda install -c conda-forge nodejs
```
或者 (Mac Only):

```bash
	brew install node
```
完成之后，有两种方式进行插件的安装：

1. 通过开启 Extension Manager 来安装和管理插件

2. 通过执行命令的方式安装。

如果使用第一种方式，需要手动的开启 Extension Manager: 在设置中选择高级设置 (command+逗号 )，再选择Extension Manager一栏，修改设置为 true:

```json
{
	"enabled": true
}
```
设置成功之后，即可在走侧边栏中看到插件选项卡，可以查看已经按照的插件和探索其他未安装的插件。

![data](/assets/img/Lab/gifs/extension.gif)

### Awesome jupyterlab extension list

目前，社区中，已经有很多优秀的插件可以使用，如果你自己一个个的去检索寻找非常麻烦，所以**我建立了一个目前最完整的实用列表：https://github.com/Yogayu/awesome-jupyterlab-extension。**列表中，包含简单的介绍，还有插件的效果展示图。因此，你能很方便的索引到自己需要的插件。

在本文中，重点介绍一些常用的插件。

### Github Extenion

安装命令：

```bash
jupyter labextension install @jupyterlab/github
```

该扩展，会在左侧区域添加一个 Github 浏览器选项卡。你可以浏览 GitHub 上的内容，仓库等等。也可以直接打开仓库中 JupyterLab 支持的文件。如果文件是 Notebook 类型，你直接直接运行，无需下载到本地,非常的方便。

输入 GitHub 用户名，即可查看其下所有仓库内容。

![github](/assets/img/Lab/gifs/github.gif)


直接打开 Notebook 文件，即可在本地查看和运行远程 Notebook：

![github](/assets/img/Lab/gifs/github.png)

### Jupyter Git

Jupyter Git 是 JupyterLab 中的 Git图形化管理工具。安装之后，可以在 git标签页，查看对应的文件修改情况和版本历史等信息。类似于VSCode的Git管理工具。（ 是的，我们的 JupyterLab 越来越像 VSCode 了 : )

安装命令：

```bash
jupyter labextension install @jupyterlab/git
pip install jupyterlab-git
jupyter serverextension enable --py jupyterlab_git
```

使用：

![draw](/assets/img/Lab/gifs/git.gif)

### Jupyterlab-toc

顾名思义，该插件可以自动生成文件内容目录。

安装命令：

```bash
jupyter labextension install @jupyterlab/toc
```



成功之后，即可以点击目录标签页，查看文档目录：

![tab](/assets/img/Lab/gifs/toc.gif)



### Jupyterlab-drawio

Jupyterlab-drawio 是一个在绘图插件，它将drawio / mxgraph独立集成到了 jupyterlab 中。

安装命令：

```bash
jupyter labextension install jupyterlab-drawio
```

安装成功之后，在启动面板即可以选择 Diagram 类型文件。

![draw](/assets/img/Lab/gifs/draw.gif)

### Jupyterlab_voyager

Voyager是一种数据可视化工具，可以自动和手动的生成图表。用来查看数据的基本分布信息，十分方便。

安装命令：

```bash
jupyter labextension install jupyterlab_voyager
```

安装之后，选择CSV或者JSON文件，右击选择 open with voyager，即可使用：

![vag](/assets/img/Lab/gifs/vag.gif)

## 安装其他语言的 Kernel

前面我们说到 JupyterLab 支持多种语言，所以我们只需在 https://github.com/jupyter/jupyter/wiki/Jupyter-kernels 列表上找对对应的语言，安装其 Kernel 就可以使用。

这里我们以 R 和 Julia 为例。

### 安装 R Kernel

安装文档:  https://irkernel.github.io 

1. 安装 R
   下载地址：https://cran.r-project.org/mirrors.html
   清华大学镜像源：https://mirrors.tuna.tsinghua.edu.cn/CRAN/

2. 在终端中运行 R, 运行命令：
```bash
The packages (' IRkernel)
IRkernel: : installspec ()
```
3. 或者直接使用 conda install -c r r-essentials 安装一些必备的包。

### 安装 Julia Kernel

安装文档: https://github.com/JuliaLang/IJulia.jl

1. [安装 Julia]( https://julialang.org/downloads/)

2. 打开 Julia 之后，运行命令

```bash
using Pkg
Pkg.add("IJulia")
```

完成之后即可在 JupyterLab 中新建对应语言的Notebook。

![language](/assets/img/Lab/gifs/language.png)

如果想要在同一个Notebook中运行不同的语言，可以参考项目:[sos-notebook](https://vatlab.github.io/blog/post/sos-notebook/)。

## Notebook 资源推荐

- [首推官方资源列表](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)：https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks

![image-20190504145729721](/assets/img/Lab/gifs/source.png)

最后，特别推荐一些书籍和课程的 Notebook：


- [The Python Data Science HandBook](https://github.com/jakevdp/PythonDataScienceHandbook): https://github.com/jakevdp/PythonDataScienceHandbook
- [Hands-on the Machine Learning with Scikit-Learn and TensorFlow](https://github.com/ageron/handson-ml) : https://github.com/ageron/handson-ml
- [the Deep Learning with Python]( https://github.com/fchollet/deep-learning-with-python-notebooks): https://github.com/fchollet/deep-learning-with-python-notebooks
- [UC Berkeley Data 100](https://github.com/DS-100/textbook): https://github.com/DS-100/textbook


还有很多很多其他有趣的 Notebook，就等大家自己去探索，或者你可以自己写一个系列啦。

## 总结

最后，一起来回顾下本文内容吧：

![Jupyter Lab CN](/assets/img/Lab/gifs/Jupyter Lab CN.png)

看完之后，是不是觉得 JupyterLab 可以成为你的主力数据分析 IDE 了呢？




[^1]: https://blog.jupyter.org/jupyterlab-is-ready-for-users-5a6f039b8906



























