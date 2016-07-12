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
	
	


## 参考
- [参考一](http://www.apjs.net/#dir31)