angular.module('myApp',[])
.controller('todoController',["$scope","todo",function($scope,todo){
    $scope.Todos = todo.getAllTodos();
    $scope.newTodoText = '';
    $scope.addTodo = function(){
        todo.addTodo($scope.newTodoText);
    }
}]);
