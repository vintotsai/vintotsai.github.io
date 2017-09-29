第一、HTTP抓包
1、打开Charles程序
2、查看Mac电脑的IP地址，系统偏好设置->网络就可以查看到了，比如我的ip地址是：192.168.1.7
3、打开iOS设置，进入当前wifi连接(Mac在一个局域网内)，设置HTTP代理Group，将服务器填为上一步中获得的IP，即192.168.1.7，端口填8888：


4、iOS设备打开你要抓包的app进行网络操作
5、Charles弹出确认框，点击Allow按钮即可

第二、HTTPS抓包

需要下载Charles证书http://www.charlesproxy.com/ssl.zip，解压后导入到iOS设备中,这里我也是下载好了：

我们在iOS设备中使用safari打开这个链接：
    点击打开：    点击安装：

再次点击安装，证书就安装成功了

然后在Charles的工具栏上点击Proxy按钮，选择Proxy Settings…
切换到SSL选项卡，选中Enable SSL Proxying，别急，选完先别关掉，还有下一步
这一步跟Fiddler不同，Fiddler安装证书后就可以抓HTTPS网址的包了，Charles则麻烦一些，需要在上一步的SSL选项卡的Locations表单填写要抓包的域名和端口，点击Add按钮，在弹出的表单中Host填写域名，比如填api.instagram.com，Port填443

这时候我们打开网易app：


就可以看到数据了，至此抓包工作就搞定了。

注意：当我们不抓包的时候，会将Charles关闭，这时候iOS是访问不到网络的，因为设置了代理(就是Charles)，这时候需要将iOS中的代理关闭，这个是抓包时经常犯的错。