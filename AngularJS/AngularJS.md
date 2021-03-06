# AngularJS
- 克服 HTML 在构建应用上的不足。
- 类库，函数的集合。
- 框架
- 主要考虑的是构建 CRUD（增加 Create，查询 Retrieve，更新 Update，删除 Delete） 应用，90% 的 Web 应用都是 CRUD 应用。
- 双向数据绑定（bi-directional data binding）

	``` html
	<!doctype html>
	<html ng-app>
	    <head>
	        <script src="http://code.angularjs.org/angular-1.0.1.min.js"></script>
	    </head>
	    <body>
	        Your name: <input type="text" ng-model="yourname" placeholder="World">
	        <hr>
	        Hello {{yourname || 'World'}}!
	    </body>
	</html>
	```
		
	
	`<input ng-model="yourname">`，`<input>` 绑定到 yourname 模型变量上。`<input>` 的任何更改都会反映到 yourname 模型变量中，模型变量的任何更改都会反映到 {{yourname}} 中。
- ng-app 指令定义一个 AngularJS 应用程序。
- ng-model 指令把元素值（比如输入域的值）绑定到应用程序。
- ng-bind 指令把应用程序变量 name 绑定到某个段落的 innerHTML。
- ng-init 初始化 AngularJS 应用程序变量。
- `var app = angular.module('myApp', []);` 第二个参数指所依赖的模块列表。


## 参考
- [参考一](http://www.apjs.net/#dir31)
- [参考二](http://www.runoob.com/angularjs/angularjs-intro.html)
- [慕课网 AngularJS 视频](http://www.imooc.com/learn/156)

## AngularJS 四大特性
- MVC
- 模块化和依赖注入
- 双向数据绑定
- 指令

### 指令
- restrict
	- A 属性 默认
	- E 元素
	- M 注释
		- <!-- directive:hello --> 注意中间的空格。
	- C class
- templateCache 模板缓存
- 指令执行机制
	- 加载阶段
		- 加载 angular.js，找到 ng-app 指令，确定应用的边界。
	- 编译阶段
		- 遍历 DOM，找到所有指令。缓存。
		- 根据指令代码的 template、replace、transclue 转换 DOM 结构。
		- 如果找到 complie 函数，调用。
	- 链接阶段
		- 对每条指令运行 link 函数。不要在 controller 或其他地方操作 DOM。在指令中的 link 中操作 DOM。
		- link 函数一般用来操作 DOM、绑定事件监听器。
		
	![](https://github.com/GeekStudioHIT/Web-Front-End/blob/master/AngularJS/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202016-07-20%20%E4%B8%8B%E5%8D%886.20.57.png)
- AngularJS 内置指令
- 自定义指令，元素，不能用大写。


- 原型、闭包、作用域、DOM 和 BOM 操作。犀牛书。《JavaScritp 高级程序设计》。《JavaScript 语言精粹》。《JavaScript 设计模式》。
- 定义模块。var myModule = angular.module("MyModule", []);

## Angular 模块
- [参考一](https://github.com/xufei/blog/issues/17)
- 一堆功能单元的集合。
- 只是将依赖的 module 做一个简单的复制。
- 不能动态加载。
- 2.0 已解决。
- .run 块在注入器创建之后被执行，是所有 AngularJS 应用中第一个被执行的方法，与 main 方法最接近的概念。通常用来注册全局的事件监听器。比如路由发生变化时，都执行一个函数来验证用户的权限，放置这个功能唯一合理的地方就是 run 方法。
