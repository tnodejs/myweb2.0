<h2>框架的入门示例</h2>
[查看详细文档](http://sz.yun.ftn.qq.com/ftn_handler/8c86e037edb85494cf2ba999fc1ad06853cefac01cb9c5927c3a42a9104acfec?fname=%E6%9C%AA%E5%91%BD%E5%90%8D-212014-3-31%2011.11.22.png&pictype=scaled&size=500*500)

为了能够让初学者更容易入手本框架，因此创建了本框架入门文档，希望通过简单的入门文档，能够让学者简单的了解本框架的一些简单应用，从而才能更深入的学习本框架<br/>
<strong>关注微信：chinaNodejs</strong><br/>
<h3>创建controller</h3>
进入本框架的根目录文件夹中的app\controller创建一个controller，例如：example.js。<br/>
<h3>controler类的实现</h3>
module.exports = function(){
    var _self = this;
    
    this._res  = arguments[0];
    this._req  = arguments[1];
    
    // 父类继承实现
    ACTION.call(_self);
    
    SYS.inherits(this, Action);
    
    this.test = function(){
        _self.render('example.jade');
    }
} 
如上代码中，需要大家注意的是，res和req是HTTP的两个对象，ACTION为预载入action基类，所有的controller都需要继承该基类。这里使用了Node.js的util模块来实现继承关系。继承代码实现完成以后，再实现简单的test method，该test方法就是读取文件夹view中的example.jade模版文件。<br/>
<h3>创建example.jade模版</h3>
创建完成controller以后，再添加example.jade文件，然后新增代码。在项目根目录下的view文件夹中新增example.jade文件，并添加如下代码。(注意，以下是jade模版格式，需要按照jade模版规范，具体规范可查阅https://github.com/visionmedia/jade)<br/>
 html
    head
        title myweb test
    body
        div
            this is a myweb test by danhuang 
<h3>启动服务</h3>
完成以上三个过程以后，我们就可以在根目录下运行下面命令启动服务。<br/>
node app
成功运行后，可以看到如下日志信息，表明成功启动。<br/>
<pre>
C:\Users\danhuang\Desktop\myweb_proj>node app
load mysql success
load http success
load url success
load path success
load querystring success
load jade success
load socket.io success
load connect success
load util success
load log4js success
load mongodb success
load fs success
load ./http_param success
load ./static_module success
load ./node_session success
load ../app/core/router success
load ../app/core/action success
load ../app/core/log success
load ../app/core/appLog success
load ../app/core/comm/util success
load ../app/core/curl success
load ../app/core/baseMongodb success
server start 127.0.0.1:3316
-----------------------------
</pre>
<h3>查看服务是否正常</h3>
成功运行服务器以后，我们就可以打开浏览器，访问：http://127.0.0.1:3316/example/test 如果看到如下信息表示成功运行：<br/>
is a myweb test by danhuang<br/>
Myweb开发框架文档2014-02-20 by danhuang<br/>
![github](http://blog.lovedan.cn/wp-content/uploads/2013/12/qrcode_for_gh_38b2315f7006_344.jpg "github") 




