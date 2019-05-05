---
layout: post
lang: zh
title: The complete guide to Data Science IDE JupyterLab 
keywords: JupyterLab, Data Science, Data Analysis IDE, JupyterLab Extension
description: If the Jupyter Notebook is like an interactive Notebook, the Jupyter Lab is more like an interactive VSCode. What's more, one of the things that's really powerful about JupyterLab is that you can deploy it to a cloud server. Whether it's a computer, a tablet, or a phone, it can be accessed remotely from a browser.
tags: [Tech, Data Science]
catgray: [data2art]
author: Xinyu You
bio: 'To create, To experience.'
cover: /assets/img/Lab/jupyter.jpeg
---

**[中文版本]({{baseurl}}/Jupyterlab.html)**

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [The complete guide to Data Science IDE JupyterLab](#the-complete-guide-to-data-science-ide-jupyterlab)
  - [Introduction](#introduction)
    - [Try before you insteall](#try-before-you-insteall)
    - [Install](#install)
  - [Starting JupyterLab](#starting-jupyterlab)
    - [Interface Introduction](#interface-introduction)
    - [Block Type](#block-type)
  - [Basic features of Notebook](#basic-features-of-notebook)
    - [Cell Type](#cell-type)
    - [Autocomplete](#autocomplete)
    - [Introspection](#introspection)
    - [Magic Code](#magic-code)
      - [％timeit](#%EF%BC%85timeit)
    - [Shortcuts](#shortcuts)
    - [Making PPT](#making-ppt)
  - [Utility features unique to JupyterLab](#utility-features-unique-to-jupyterlab)
    - [Flexible multi-window view](#flexible-multi-window-view)
    - [Expand and Collapse cells](#expand-and-collapse-cells)
    - [Drag and Drop cells](#drag-and-drop-cells)
    - [Theme](#theme)
    - [Multiple types of files are supported](#multiple-types-of-files-are-supported)
  - [Extension](#extension)
    - [Awesome jupyterlab extension list](#awesome-jupyterlab-extension-list)
    - [Github Extenion](#github-extenion)
    - [Jupyter Git](#jupyter-git)
    - [Jupyterlab-toc](#jupyterlab-toc)
    - [Jupyterlab-drawio](#jupyterlab-drawio)
    - [Jupyterlab_voyager](#jupyterlab_voyager)
  - [Install other languages' kernels](#install-other-languages-kernels)
    - [Install the R Kernel:](#install-the-r-kernel)
    - [Install the Julia Kernel](#install-the-julia-kernel)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

> Jupyter is not just a tool, it powers the whole innovation of the world.

## Introduction

JupyterLab is a next-generation web-based interface developed by the Jupyter team for the Jupyter project. It is more integrated, flexible, and extensible than the Jupyter Notebook. It supports [more than 100 kinds of languages](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels), and supports for multiple documents mutual integration, which realizes the interactive computing new work process[^1].

If the Jupyter Notebook is like an interactive Notebook, the Jupyter Lab is more like an interactive VSCode. What's more, one of the things that's really powerful about JupyterLab is that you can deploy it to a cloud server. Whether it's a computer, a tablet, or a phone, it can be accessed remotely from a browser.

With JupyterLab, you can do data analysis related work, you can do interactive programming, and you can learn a lot form the rich Notebook materials in the community.

There are over 1.7 million public Jupyter Notebook sources on GitHub[^1]. For example, in the official Notebook [**"A gallery of interesting Jupyter Notebooks"**](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks), we list all Notebooks with the following themes:

- [Programming and Computer Science](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks#programming-and-computer-science)
- [Statistics, Machine Learning and Data Science](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks#statistics-machine-learning-and-data-science)
- [Mathematics, Physics, Chemistry, Biology](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks#mathematics-physics-chemistry-biology)
- [Earth Science and Geo-Spatial data](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks#earth-science-and-geo-spatial-data)
- [Linguistics and Text Mining](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks#linguistics-and-text-mining)

- [Psychology and Neuroscience](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks#psychology-and-neuroscience)
- [Machine Learning, Statistics and Probability](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks#machine-learning-statistics-and-probability)
- [Physics, Chemistry and Biology](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks#physics-chemistry-and-biology)
- [Economics and Finance](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks#economics-and-finance)
- [Earth science and geo-spatial data](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks#earth-science-and-geo-spatial-data)

If you are a educator, you can also use it to teach, for example, by installing plug-ins to automate the checking of student code results. You can read this book for more advice and information:[《Teaching and Learning with Jupyter》](https://jupyter4edu.github.io/jupyter-edu-book/)。

**Anyway, no matter what you do, no matter what field you're in, no matter whether you've used the Jupyter Notebook or you haven't touched it at all. From now on, using JupyterLab, a handy tool, can improve your work efficiency and make your experience better. **

Note: the best way to read this article is to turn on your computer and actually try out some of these features.



### Try before you insteall

You can try [JupyterLab](https://jupyter.org/try) Binder directly before installing it 

![try](/assets/img/Lab/gifs/try.png)


Or browse some Notebooks: [https://nbviewer.jupyter.org](https://nbviewer.jupyter.org)


![view](/assets/img/Lab/gifs/view.png)

### Install

JupyterLab can be installed using conda, pip, or pipenv.


    # conda
    conda install -c conda-forge jupyterlab
    
    # pip
    pip install jupyterlab
    
    # pipenv
    pipenv install jupyterlab
    pipenv shell

I personally recommend using conda for installation.


## Starting JupyterLab

Go to the directory where you want to use JupyterLab and execute the command:

	Jupyter lab

![lanch](/assets/img/Lab/gifs/lanch.png)

Token is used to verify identity, which required when you open a new tag.

### Interface Introduction

Interface:

![interfaceoverview](/assets/img/Lab/gifs/interfaceoverview.png)

The left-hand column (command + B) contains the following by default from top to bottom:

- File explorer
- running kernel list
		- You can shuoutdown kernels here.
		![shuoutDown](/assets/img/Lab/gifs/shuoutDown.gif)
- Command Palette (command/ctrl + shift + C)
- Cell Toll
- Open Tabs

### Block Type
JupyterLab has the following [block type](https://github.com/jupyterlab/jupyterlab-demo/tree/master/slides):

- Notebooks
- File browser
- Terminar
- Text Editor
- Kernels
- Output

## Basic features of Notebook
The Notebook in JupyterLab is used the same way as the Notebook in Jupyter.

### Cell Type

![cellType](/assets/img/Lab/gifs/cellType.gif)

Each Notebook is a kernel and can contain multiple cells. There are three types of Cell: **markdown, code, and row**.


The shortcut to run cell is shift + command, which is probably the most common one you will used.

After selecting the cell, click the space area and press m key to turn it into markdown cell, y key to turn it into code cell, and r key to turn it into row cell.


It doesn't matter if you forget the shortcut keys. Just go to the command palette to check:

![runcell](/assets/img/Lab/gifs/runcell.gif)

### Autocomplete

Like most of the local IDE, while entering code in the cell, pressing the Tab key will search the namespace for any variables (objects, functions, etc.) matching the characters you have typed so far.

![tab](/assets/img/Lab/gifs/tab.gif)

### Introspection
Using a question mark (?) before or after a variable will display the document about the object:

![Introspection2](/assets/img/Lab/gifs/doc.gif)

Using ?? will show the function’s source code:

![Introspection2](/assets/img/Lab/gifs/doc2.gif)

### Magic Code
Some of IPython's special commands (which are not built into Python itself) are called "magic code". Magic code are any commands prefixed with a percent sign %.

#### %matplotlib

Probably the most common magic command [%matplotlib](https://ipython.readthedocs.io/en/stable/interactive/plotting.html). It is used to specify the backend of matplotlib. Usually we use:

```bash
%matplotlib inline
```

Using inline as the backend means you can inline an image directly on the Notebook, and you can skip the step of plt.show().

#### ％timeit

The %timeit function checks the execution time of any Python statement, for example:

![magic1](/assets/img/Lab/gifs/magic1.png)

You can run any Python file on the Notebook using the %run command. Such as:
	
```bash
%run add.py
```

There are other common magic code, such as %debug, %load_ext, and %pwd.

All magic code list refer [here](https://ipython.readthedocs.io/en/stable/interactive/magics.html).

### Shortcuts

Familiar with the shortcuts can improve efficiency, the table below is a summary of some common shortcut keys, you can first browse, to see what you often use:

![Shortcuts](/assets/img/Lab/gifs/Shortcuts.png)

[source and download address](https://blog.ja-ke.tech/2019/01/20/jupyterlab-shortcuts.html): https://blog.ja-ke.tech/2019/01/20/jupyterlab-shortcuts.html

You can also view or modify the corresponding shortcut keys directly in the Settings.

![shortcuts2](/assets/img/Lab/gifs/shortcuts2.png)

### Making PPT

You can also make a web-based powerpoint presentation with a Notebook, which is a good choice if your presentation contains a lot of code.

[Operating as follows](https://github.com/jupyterlab/jupyterlab/issues/5018#issuecomment-485842330):

1. Open a notebook
2. Select Cell Tools on the left side bar
3. Select the Slide Type
		![presentation](/assets/img/Lab/gifs/presentation.gif)
4. Activate another cell
5. Repeat 3 and 4
6. $ jupyter nbconvert foo.ipynb --to slides --post serve

The display effect is as follows:

![presentation](/assets/img/Lab/gifs/presentation2.gif)

In addition, if you want to go back to the original Jupyter Notebook, you can just change the Lab after the link to Tree:

![tree](/assets/img/Lab/gifs/tree.gif)

## Utility features unique to JupyterLab

### Flexible multi-window view
If you use a powerful IDE like VSCode, one of the least satisfying things about the Jupyter Notebook is that it only supports a single view of files. If you want to use both Notebook and terminal on one page, or if you want to preview the markdown file on the right side, Notebook is not supported. However, the Jupyter Lab has flexible window-view capabilities that enable similar appeal requirements.

By dragging and dropping, you can freely add views:

![muti](/assets/img/Lab/gifs/muti.gif)

Or view the output picture as a window separately:

![muti2](/assets/img/Lab/gifs/muti2.gif)

For the markdown file, right-click the display menu and select preview to view.

![markdown](/assets/img/Lab/gifs/markdown.gif)


**Another unique feature is that you can execute blocks of code in text file.**

For example, in the markdown documentation, there is a piece of Python code that you can right-click to select a new console from the menu. Click anywhere in the code snippet and execute (Shift+Center) :

![markdown](/assets/img/Lab/gifs/markdown2.gif)

### Expand and Collapse cells

We notice that there is a blue line on the left of each Cell and Output. Click on the blue line to collapse or expand it. If there is a lot of Output or we don't care about the content of some cells for the time being, we can collapse it.

![cellCr](/assets/img/Lab/gifs/cellCr.gif)

### Drag and Drop cells

One of the point that JupyterLab is very flexible is that every Cell is drag-and-drop, you can drag and drop not only within a single notebook, but also between notebooks.

![drag](/assets/img/Lab/gifs/drag.gif)

### Theme

The JupyterLab comes with black and white themes and a variety of text highlighting themes. You can set the theme under the Settings menu.

![theme](/assets/img/Lab/gifs/theme.gif)

### Multiple types of files are supported

The Jupyter Lab has excellent support for different types of files. Such are JSON file, CSV file, and image file.

![data](/assets/img/Lab/gifs/data.gif)

## Extension

Like VSCode, JupyterLab installs extensions.

The extension for JupyterLab is the npm package. Therefore, you need to install node.js in advance.

Installation command:
```bash
	Conda install -c conda-forge nodejs
```
Or (Mac Only) :

```bash
	The brew install node
```

After that, there are two ways to install the extension:

1. Install and manage extension by using the Extension Manager.
2. Install by executing commands.

If you want to use the first method, manually open the Extension Manager: select advanced Settings (command+ ,) in the Settings, then select the Extension Manager column and change the setting to true:

```json
{
	"enabled": true
}
```

Now, you can use the Extension TAB in the sidebar.

![data](/assets/img/Lab/gifs/extension.gif)

### Awesome jupyterlab extension list

In the community, there are many excellent extensions can use, it‘s time-consuming if you search one by one by yourself. 

Therefore, **I set up an awesome list: https://github.com/Yogayu/awesome-jupyterlab-extension**. Each extension including a simple introduction, as well as display diagram. As a result, you can easily index the extension you need.

In this article, I focus on some commonly used extensions.

### Github Extenion

Installation command:

```bash
jupyter labextension install @jupyterlab/github
```

This extension adds a Github browser TAB in the left sidebar. You can browse GitHub content, repositories, etc. You can also directly open the files supported by JupyterLab in the repository. If the file is a Notebook type, you can run it directly without downloading it locally, which is very convenient.

Enter the GitHub user name to view all repository content under it.

![github](/assets/img/Lab/gifs/github.gif)

Directly open the Notebook file to view and run the remote Notebook locally:

![github](/assets/img/Lab/gifs/github.png)

### Jupyter Git

Jupyter Git is a graphical Git management tool in JupyterLab. After installation, you can view the corresponding file modification status, version history and other information in the git TAB. This is a Git management tool similar to VSCode. (Yes, our JupyterLab is becoming more and more like VSCode:)


Installation command:

```bash
jupyter labextension install @jupyterlab/git
pip install jupyterlab-git
jupyter serverextension enable --py jupyterlab_git
```

Usage:

![draw](/assets/img/Lab/gifs/git.gif)

### Jupyterlab-toc

As the name implies, this extension automatically generates a directory of file contents.

Installation command:

```bash
jupyter labextension install @jupyterlab/toc
```

Click the directory TAB to view the document directory:

![tab](/assets/img/Lab/gifs/toc.gif)

### Jupyterlab-drawio

Jupyterlab-drawio is a drawing extension that integrates drawio/mxgraph into Jupyterlab independently.

Installation command:

```bash
jupyter labextension install jupyterlab-drawio
```

After the installation is successful, the Diagram type file can be selected in the launcher.

![draw](/assets/img/Lab/gifs/draw.gif)

### Jupyterlab_voyager

Voyager is a data visualization tool that automatically and manually generates charts, which is very convenient for viewing basic distribution information of data.

Installation command:

```bash
jupyter labextension install jupyterlab_voyager
```

After installation, select CSV or JSON file and right click open with voyager to use:

![vag](/assets/img/Lab/gifs/vag.gif)

## Install other languages' kernels

we know JupyterLab support multiple languages, so we just need to found in the https://github.com/jupyter/jupyter/wiki/Jupyter-kernels list of corresponding language and install the Kernel.

Here we take R and Julia:

### Install the R Kernel:

Installation documentation: https://irkernel.github.io


1. Install R
		To download: https://cran.r-project.org/mirrors.html
2. Run R in the terminal and run the command:

```bash
The packages (' IRkernel)
IRkernel: : installspec ()
```
3. Or use: 

  ``` bash
		conda install-c r r-essentials 
	```
	to install some essential packages.
	
### Install the Julia Kernel

Installation documentation: https://github.com/JuliaLang/IJulia.jl

1.[install Julia](https://julialang.org/downloads/)
2. After opening Julia, run the command
  ``` bash
  Using Pkg
  Pkg. Add (" IJulia ")
	```

When you are finished, you can create a new Notebook for the corresponding language in JupyterLab.

![language](/assets/img/Lab/gifs/language.png)

If you want to run different languages in one Notebook, you can refer to the project: [SOS - Notebook](https://vatlab.github.io/blog/post/sos-notebook/).

## Notebook Resource recommendation

- [Official resources list](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks):https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks


![image - 20190504145729721](/assets/img/Lab/gifs/source.png)



Finally, I would like to recommend some books and class notebooks:

- [The Python Data Science HandBook](https://github.com/jakevdp/PythonDataScienceHandbook): https://github.com/jakevdp/PythonDataScienceHandbook
- [Hands-on the Machine Learning with Scikit-Learn and TensorFlow](https://github.com/ageron/handson-ml) : https://github.com/ageron/handson-ml
- [the Deep Learning with Python]( https://github.com/fchollet/deep-learning-with-python-notebooks): https://github.com/fchollet/deep-learning-with-python-notebooks
- [UC Berkeley Data 100](https://github.com/DS-100/textbook): https://github.com/DS-100/textbook

There are a lot of other interesting Notebooks. You can explore on your own, or maybe you can write your own series and publish it.

## Summary

Finally, let's review this article together:

![Jupyter Lab en](/assets/img/Lab/gifs/Jupyter Lab en.png)

Now, do you think JupyterLab can become your main data analysis IDE?