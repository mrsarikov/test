angular.module('myApp')
.directive('todoDirective',["todo",function(todo){
    return{
        restrict:'E',
        templateUrl:'/templates/todo.html',
        scope:{
            id: '=',
            text: '='
        },
        controller:function(){
            this.deleteTodo = function(id){
                    todo.deleteTodo(id);
            }
        },
        controllerAs:'todoCtrl'
    }
}])