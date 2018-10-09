---
layout: post
lang: en
title: 在服务器上搭建Shadowsocks以实现网络自由
time: 5
onlineImg: 
keywords: Shadowsocks, 翻墙
description: 在服务器上搭建Shadowsocks以实现网络自由
image: false
tags: [Techology]
---

# 在服务器上搭建Shadowsocks以实现网络自由

搜索引擎几乎是我们在解决日常问题时，不可或缺的工具。对于中国化的问题而言，百度、Bing可能已经够用。但作为程序员，你在解决实际问题时，如果不用Google，毫不夸张的说，解决问题的时间会成倍增长。

<!-- more -->

而就目前形式而言，没有哪一种方式，比拥有自己的独立服务器，并在上面搭建Shadowsocks的方式更为便利和安全。

所以，本文将简明具体的介绍，如何使用[DigitalOcean中的服务器](https://cloud.digitalocean.com/login?i=eeb47d)，搭建你私人Shadowsocks。

![概要](http://7xle3b.com1.z0.glb.clouddn.com/7-31-DigitalOcean_-_N-7.png)

DigitalOcean支持支付宝付款，推荐使用美国或日本的服务器。因为DigitalOcean有邀请制，若你使用[我的邀请链接](https://m.do.co/c/fa78810fab23)注册使用，还能再免费够获得$10。

另外，若你现在是高校学生，还能使用[Github Eduaction](https://education.github.com/)免费提供的$50的优惠券。在使用时，可能需要信用卡付费信息，我在使用该优惠券时，使用PayBal支付（支持支付宝）充入了`$5`，所以没有通过人工的方式去验证付费信息。

![可选方案](http://7xle3b.com1.z0.glb.clouddn.com/digitalocean-5.png)

## 安装
### 1. 下载Shadowsocks

- Debian / Ubuntu:
		
```bash
apt-get install python-pip
pip install git+https://github.com/shadowsocks/shadowsocks.git@master
```

- CentOS:

```bash
yum install python-setuptools && easy_install pip
pip install git+https://github.com/shadowsocks/shadowsocks.git@master
```
### 2. 服务器配置

1. 新建目录(此处我使用的根路径)
```bash
mkdir ss
```
2. 新建配置文件
```bash
vim shadowsocks.json
```
	输入（[不知道怎么用Vim？](http://data2art.com/Vim/)）    
```bash
{
	"server":"你服务器的ip或域名地址",
	"server_port":8388,
	"local_address": "127.0.0.1",
	"local_port":1080,
	"password":"你自己设定的密码",
	"timeout":300,
	"method":"aes-256-cfb",
	"fast_open": false
}
```

3. 运行

	```bash
	sserver -c ./ss/shadowsocks.json
    ```
	或者在后台运行：

	```bash
	ssserver -c ./ss/shadowsocks.json -d start
	```
	
	如果上面后台运行命令失效，可以使用`nohup`的方式运行：
	
	```bash
	nohup ssserver -c ./ss/shadowsocks.json -d start
	```
	
	*一般情况下推荐后台运行，因为后台运行时不需要一直开启终端。*
	
	停止：
	
	```bash
	ssserver -c ./ss/shadowsocks.json -d stop
	```    
	更为详细的配置使用可参考[官方文档](https://github.com/shadowsocks/shadowsocks/wiki)。

### 客户端下载

[客户端下载地址](https://github.com/shadowsocks/shadowsocks/wiki/Shadowsocks-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E#%E5%AE%A2%E6%88%B7%E7%AB%AF)



[如果需要翻墙，对于Mac版本，网盘地址](https://pan.baidu.com/s/1mhHajxu)，密码：gik2。

对于iOS版本，可以使用美区的Apple ID去下载客户端，例如 Potatso Lite。

### 配置
1. 手动配置
2. 二维码识别

**Enjoy The Internet!**


