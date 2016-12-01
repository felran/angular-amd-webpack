/**
 * Created by luoran on 2016/12/1.
 */
define([
    'angular'
],function(angular){
    angular
        .module('app',[])
        .controller('userController',userController);
    userController.$inject = ['$scope'];
    function userController($scope){
        $scope.name='123';
    }
})