///<reference path="../Scripts/typings/angularjs/angular.d.ts"/>
var DefaultController = (function () {
    function DefaultController($scope, $mdSidenav) {
        this.$scope = $scope;
        this.$mdSidenav = $mdSidenav;
    }
    DefaultController.prototype.toggleSidenav = function (menuId) {
        this.$mdSidenav(menuId).toggle();
    };
    return DefaultController;
})();
angular.module('defaultApp', ['ngMaterial']).controller('defaultController', ['$scope', '$mdSidenav', DefaultController]);
//# sourceMappingURL=default-controller.js.map