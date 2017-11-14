移动端爬坑

http://blog.csdn.net/crper/article/details/51902681


汇总下自己搞移动端遇到掉进去的坑，以及脱坑的方案；
1
2
Flex兼容

Flex想要兼容众多花样式手机，要注意以下这么些

前缀要考虑2009~2012年的语法[webkit-box,flex,flex-box]
少用复合属性，比如flex:1，考虑兼容理应拆成[flex-grow,flex-shrink,flex-basis]；flex-flow拆开成[flex-direction,flex-wrap]
   demo{
          display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
          display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
          display: -ms-flexbox;      /* TWEENER - IE 10 */
          display: -webkit-flex;     /* NEW - Chrome */
          display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */

}

这些前缀很少手动去写，一般都用构建工具处理，我用的是gulp+autoprefixer来处理,这里我的处理范围

var AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 9',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 2.3',
  'bb >= 10'
];

值的一提的是，添加前缀并不是万能的，有些国内的手机就不吃这一套了，今天小伙伴就遇到了；华为的一款手机不支持常规的flex写法。。。最终是原因是不能用行内元素，要改成block元素才能支持flex

2016-8-11 update: 使用flex：1的子元素，切记要增加width:0% .. 有些android不带这个很奇葩【错乱】，且不要使用margin:0 auto【作用于子元素】

IOS的H5页面scroll不流畅解决方案

在滚动包裹层添加这么一条私有前缀样式即可享受类似APP的滑动效果，不仅丝滑，还带弹性！

   .contain{
    -webkit-overflow-scrolling : touch;    
    }

IOS 遮罩层较好方案

拒绝采用fixed！！！！！

遮罩层采用position:absolute来置顶，内部元素采用flex来布局； 
这种写法可以避免一大堆天坑！！！

若是实在不信邪，滚动的时候，微信端这些你就会感受到花儿为什么这样红了。。。

IOS滚动窗滑动到底部还能弹窗拖拉的奇葩修复

这个方案是通过计算离底部多远加状态来阻止touch事件

// 防止内容区域滚到底后引起页面整体的滚动
var content = document.querySelector('main');
var startY;

content.addEventListener('touchstart', function (e) {
    startY = e.touches[0].clientY;
});

content.addEventListener('touchmove', function (e) {
    // 高位表示向上滚动
    // 底位表示向下滚动
    // 1容许 0禁止
    var status = '11';
    var ele = this;

    var currentY = e.touches[0].clientY;

    if (ele.scrollTop === 0) {
        // 如果内容小于容器则同时禁止上下滚动
        status = ele.offsetHeight >= ele.scrollHeight ? '00' : '01';
    } else if (ele.scrollTop + ele.offsetHeight >= ele.scrollHeight) {
        // 已经滚到底部了只能向上滚动
        status = '10';
    }

    if (status != '11') {
        // 判断当前的滚动方向
        var direction = currentY - startY > 0 ? '10' : '01';
        // 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动
        if (!(parseInt(status, 2) & parseInt(direction, 2))) {
            e.preventDefault();
            stopEvent(e);
        }
    }
});

ios和android下触摸元素时出现半透明灰色遮罩

   /*E:这个是代指字符，实际自己替换，ID,CLASS,TAG*/
   -webkit-tap-highlight-color:rgba(255,255,255,0)

IOS 默认输入框内阴影重置

   /*E:这个是代指字符，实际自己替换，ID,CLASS,TAG*/
   E{
     border: 0;  
     -webkit-appearance: none; 
  }

旋转屏幕时，字体大小调整的问题

html, body, form, fieldset, p, div, h1, h2, h3, h4, h5, h6 {
  -webkit-text-size-adjust:100%;
}

默认启用GPU渲染页面

这个具体要看你的实际作用范围，无非就通过一些特殊属性来强制开启 
- transform:translateZ(0): Z轴会启用GPU，请自行带前缀 
- 调用preserve-3d或者animation也会

transition闪屏

/设置内嵌的元素在 3D 空间如何呈现：保留3D /
-webkit-transform-style: preserve-3d;
/ 设置进行转换的元素的背面在面对用户时是否可见：隐藏 /
-webkit-backface-visibility:hidden;
1
2
3
4
placeholder的颜色值改变

input::-webkit-input-placeholder{color:#F40;}
input:focus::-webkit-input-placeholder{color:#F40;}
1
2
移动端禁止选中内容

E {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all （移动端不需要） */
  -ms-user-select: none;      /* IE 10+ */      
}
1
2
3
4
5
IOS禁止保存或拷贝图像

img { -webkit-touch-callout: none; }
1
常用的移动端meta

<!-- 禁止页面缩放 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />

<!-- 设置Web应用是否以全屏模式运行。-->
<meta name="apple-mobile-web-app-capable" content="yes">

<!-- 启动或禁用自动识别页面中的电话号码。-->
<meta name="format-detection" content="telephone=no">

<!-- 设置缓存，看实际需求设置 -->
<meta http-equiv="Cache-Control" content="no-cache" />

<!-- 优先使用最新版本 IE 和 Chrome-->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /> 

<!-- QQ浏览器私有 -->
<!-- 全屏模式 -->
<meta name="x5-fullscreen" content="true">
<!-- 强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- 强制横屏 -->
<meta name="x5-orientation" content="landscape">
<!-- 应用模式 -->
<meta name="x5-page-mode" content="app">

<!-- UC浏览器私有 -->
<!-- 全屏模式 -->
<meta name="full-screen" content="yes">
<!-- 强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- 强制横屏 -->
<meta name="screen-orientation" content="landscape">
<!-- 应用模式 -->
<meta name="browsermode" content="application">

IOS中input键盘事件调用缓慢

直接改为监听input事件

    document.getElementById('test').addEventListener('input',fn,false);
1
页面高度渲染错误

document.documentElement.style.height = window.innerHeight + 'px';
1
怪异悬浮的表单

在部分android 机型中的输入框可能会出现如图怪异的多余的浮出表单，经过观察与测试发现只有input:password类型的输入框存在，那么我们只要使用input:text类型的输入框并通过样式-webkit-text-security: disc; 隐藏输入密码从而解决。

   input[type=text]{
    -webkit-text-security: disc;
   }
1
2
3
其他一些建议

能用transform实现的过渡的，可以不考虑animation实现；animation在部分机子过渡非常掉帧，体验非常糟糕，，遇到过好几次
页面有滚动区域的建议引入iscroll5，可以避免很多天坑
页面应该尽可能的减少复杂的DOM【一个功能点，DOM结构越直白，越好维护】，复杂DOM会增加维护难度
考虑移动端响应布局，建议引入阿里巴巴出品的lib-flexible , IOS动态调整DPR，其他设备默认DPR1
点透事件可以引入fastclick或者不用click，改为touch来写，亦或者引入zepto的tap事件
若是以后还有遇到哪些奇葩坑，爬出来了会继续更新此帖子