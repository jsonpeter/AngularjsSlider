/**
 * Created by Administrator on 2016/8/5.
 */
!(function(angular){
    'use strict';
    var myModule = angular.module('myApp',['silder']);
    myModule.controller('firstCtrl', function($scope) {
        $scope.data = [{img: "1.jpg",link:'#'},{img: "2.jpg",link:'#'},{img: "3.jpg",link:'#'}];
    });
})(window.angular)