///<reference path="../Scripts/typings/angularjs/angular.d.ts"/>


class DefaultController {
    constructor(private $scope,private $mdSidenav) { }

    toggleSidenav(menuId) {
        this.$mdSidenav(menuId).toggle();
    }
}
angular.module('defaultApp', ['ngMaterial']).controller('defaultController', ['$scope', '$mdSidenav', DefaultController]);

