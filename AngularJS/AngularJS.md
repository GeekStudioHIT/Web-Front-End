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
		- 
- AngularJS 内置指令