---
layout: post
lang: en
title: 校园网无路由器无显示器情况下使用树莓派
image: false
time: 8
tags: [Techology]
---

就如标题所言，我们的处境很艰难。

想玩树莓派，但是没有额外的显示器。
还是在校园网的环境下，无法通过路由器查看树莓派IP地址。
<!-- more -->


## 解决方案

不过办法总比困难多。

我们可以使用[SSH](https://zh.wikipedia.org/wiki/Secure_Shell)登录之后，再使用[VNC](https://zh.wikipedia.org/wiki/VNC)操纵树莓派。

## 怎么获取IP地址？

想要通过SSH登录，你需要知道树莓派的IP地址。
树莓派默认是开启[DHCP](https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E4%B8%BB%E6%9C%BA%E8%AE%BE%E7%BD%AE%E5%8D%8F%E8%AE%AE)的，也就是说它会自动分配动态地址。

如果你有路由器，那么很简单，登录路由器配置网址即可。但是，有时候学校没有办法用路由器。

假设你的电脑可以连上无线网络。



### 第一步：查找
运行命令，输入:

```bash
arp -a
```
将网线一端连接树莓派，另一端连接电脑。

再次输入:

```bash
arp -a
```

对比两次结果，多出来IP地址的即是树莓派的IP地址。
        

![树莓派连接1](http://7xle3b.com1.z0.glb.clouddn.com/2017-06-22-%E6%A0%91%E8%8E%93%E6%B4%BE%E8%BF%9E%E6%8E%A51.jpg)

### 第二步：连接
    
打开Putty(可在网络上下载，该软件开源)。

输入刚才的IP地址，可以将其Save，方便下次使用。
回车连接。

![树莓派连接2](http://7xle3b.com1.z0.glb.clouddn.com/2017-06-22-%E6%A0%91%E8%8E%93%E6%B4%BE%E8%BF%9E%E6%8E%A52.jpg)

连接成功之后，输入用户名，默认为pi，回车。
再输入密码，默认为raspberry，回车。
即登录成功。

![树莓派连接3](http://7xle3b.com1.z0.glb.clouddn.com/2017-06-22-%E6%A0%91%E8%8E%93%E6%B4%BE%E8%BF%9E%E6%8E%A53.jpg)

## 怎么进行VNC连接？

### 第一步 网络共享

将电脑网络共享给树莓派。
进入设置，搜索更改适配器设置，进入。
选择无线网连接，右击属性，点击共享Tab，勾选“运行其他网络用户通过此计算机的Internet连接来连接”，点击确定。

### 第二步 安装VNC Server
在树莓派上安装VNC Server：
```bash
sudo apt-get install tightvncserver
```
![树莓派连接4](http://7xle3b.com1.z0.glb.clouddn.com/2017-06-22-%E6%A0%91%E8%8E%93%E6%B4%BE%E8%BF%9E%E6%8E%A54.jpg)

安装成功之后设置两次密码。我已经安装过了，所以没有输入。

启动树莓派VNC Server:
```bash
vncserver :1 -geometry 800x600
```
vncserver 和 :1之间有空格，不然就会像我👇下面那样。

![树莓派连接5](http://7xle3b.com1.z0.glb.clouddn.com/2017-06-22-%E6%A0%91%E8%8E%93%E6%B4%BE%E8%BF%9E%E6%8E%A55.jpg)

Tips:

如果VNC Server密码忘了怎么办？
输入:
```bash
vncpasswd
```
来进行重置：

（请忽略我之前的错误尝试）

![7](http://7xle3b.com1.z0.glb.clouddn.com/2017-06-22-7.jpg)


### 第三步 启动VNC Viwer

如果你电脑没有安装VNC Viewer需要先安装，[下载地址](www.realvnc.com)。

输入树莓派IP加设置vnc server时的对于号(比如刚才是:1)
```bash
192.168.2.2:1 
```
点击Connect，输入vncserver密码。

OK，大功告成。

![8](http://7xle3b.com1.z0.glb.clouddn.com/2017-06-22-8.jpg)

![10](http://7xle3b.com1.z0.glb.clouddn.com/2017-06-22-10.jpg)


## 进阶 如何自动开启VNC Server？

原理是写一个脚本，在root时自动执行。

在终端中登录：
```bash
sudo su
```

进入目录：/etc/init.d/:
    
```bash
cd ./etc/init.d/
```

在此目录下新建一个文件：

```bash
#! /bin/sh
# /etc/init.d/vncboot

### BEGIN INIT INFO
# Provides: vncboot
# Required-Start: $remote_fs $syslog
# Required-Stop: $remote_fs $syslog
# Default-Start: 2 3 4 5
# Default-Stop: 0 1 6
# Short-Description: Start VNC Server at boot time
# Description: Start VNC Server at boot time.
### END INIT INFO

USER=pi
HOME=/home/pi

export USER HOME

case "$1" in
    start)
    echo "Starting VNC Server"
    #Insert your favoured settings for a VNC session
    su - $USER -c "/usr/bin/vncserver :1 -geometry 1000x800 "
    ;;

    stop)
    echo "Stopping VNC Server"
    /usr/bin/vncserver -kill :1
    ;;

    *)
    echo "Usage: /etc/init.d/vncboot {start|stop}"
    exit 1
    ;;
esac

exit 0
```
保存。

使该文件可执行：
    ```bash
    chmod 755 filename
    ```
最后：
    ```bash
    update-rc.d -f lightdm remove
    update-rc.d vncboot defaults
    ```
返回：
    ```bash
    update-rc.d: using dependency based boot sequencing
    ```
说明成功了。

重启你的树莓派，VNC Server就会自动运行了。

愉快的开始玩吧。


