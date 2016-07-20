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
