
基于angularjs制作的幻灯片
===================

[![](https://camo.githubusercontent.com/b53d32c2c22bbb8d248b357475da75aa6f5e759a/687474703a2f2f73616e64626f782e72756e6a732e636e2f75706c6f6164732f72732f32392f6777677a7532627a2f58472e6a7067)](http://sandbox.runjs.cn/show/qzpjkit5)

使用方法
-------------
 <i class="icon-pencil"></i>第一步（页面插入slider标签）
```
   <slider></slider>
```
----------
 <i class="icon-pencil"></i>第二步（参数配置）

|                  | 类型             | 说明              |
 ----------------- | ---------------------------- | ------------------
| data      | `Array`     |    `幻灯片图片数据 [{img: "1.jpg",link:'#'}...]` |
| timer      | `Number`     |    `幻灯片切换间隔timer="2"` |
| btn-left   | `String`     |  `左侧切换按钮btn-left="#btnleft" ` |
|  btn-right  | `String` |`右侧切换按钮btn-right=".btnright"`  |
| animate-type | `String`|`切换动画方式animate-type="ease"`|
|animate-time | `String`| `切换动画时间animate-time="1.0"秒`|


 <i class="icon-pencil"></i>第三步（引入指令）
```
    angular.module('myApp',['silder'])
```
----------

```
<div class="sliderBox" ng-controller="firstCtrl">
        <slider timer="2" data="data" btn-left="#btnleft" btn-right=".btnright" animate-type="ease" animate-time="1.0">
        </slider>
        <div class="btn left" id="btnleft"></div>
        <div class="btn right btnright"></div>
    </div>
```
```
 var myModule = angular.module('myApp',['silder']);
    myModule.controller('firstCtrl', function($scope) {
        $scope.data = [{img: "../img/1.jpg",link:"#"}];
    });
```
[演示地址](http://sandbox.runjs.cn/show/qzpjkit5)

