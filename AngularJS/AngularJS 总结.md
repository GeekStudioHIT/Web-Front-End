# AngularJS 总结
- AngularJS 的指令
	- 先来说说 AngularJS 和 jQuery 的区别
		- AngularJS 是数据驱动，且为双向数据绑定，数据（Modle）变了，View 也跟着变。
		- jQuery 是 DOM 驱动，先获取 DOM 元素，给这个 DOM 元素添加事件，再在这个事件（函数）中去更新 View 的内容。
	- 所以，在 AngularJS 的 Controller 中，如果你要去做『先获取 DOM 元素，再给这个 DOM 元素添加事件』这样的事情，这就与 AngularJS 的思想不一致了。但是你一定需要去做这样的事情，AngularJS 提供了 指令 去做这个事情。并且，指令 就是一套可自定义的视图模板系统。所有前端框架，只有 AngularJS 有可自定义的视图模板系统。
- 