var myModule = angular.module("MyModule", []);
myModule.directive("superman", function() {
    return {
        scope: {},
        restrict: 'AE',
        controller: function($scope) { // 这个 controller 是指令内部的 controller，暴露出 public method 供指令外部调用。
            // 如果想让一些方法暴露出一些方法，就用 controller，link 是用来处理指令内部事务，如给元素绑定事件。绑定数据。
            $scope.abilities = [];
            this.addStrength = function() {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function() {
                $scope.abilities.push("speed");
            };
            this.addLight = function() {
                $scope.abilities.push("light");
            };
        },
        link: function(scope, element, attrs) {
            element.addClass('btn btn-primary');
            element.bind("mouseenter", function() {
                console.log(scope.abilities);
            });
        }
    }
});
myModule.directive("strength", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addStrength();
        }
    }
});
myModule.directive("speed", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    }
});
myModule.directive("light", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addLight();
        }
    }
});