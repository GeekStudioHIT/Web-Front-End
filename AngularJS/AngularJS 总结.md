# AngularJS 总结
- AngularJS 的指令
	- 先来说说 AngularJS 和 jQuery 的区别
		- AngularJS 是数据驱动，且为双向数据绑定，数据（Modle）变了，View 也跟着变。
		- jQuery 是 DOM 驱动，先获取 DOM 元素，给这个 DOM 元素添加事件，再在这个事件（函数）中去更新 View 的内容。
	- 所以，在 AngularJS 的 Controller 中，『操作 DOM』这个事情，就不是 Controller 的职责，而是应该交给指令去做。并且 AngularJS 的指令，其实就是一个可自定义的视图模板系统，所有的前端框架，只有 AngularJS 可自定义视图模板。