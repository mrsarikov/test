angular.module('myApp')
.factory('todo',function todoFactory(){
    var TodosCollection = [{id:1,text:'first todo'}];
    return {
        getAllTodos:function(){
            return TodosCollection;
        },
        addTodo:function(text){
            TodosCollection.push({id:TodosCollection.length+1,text:text});
        },
        deleteTodo:function(id){
           var index = TodosCollection.findIndex(todo => todo.id == id);
           TodosCollection.splice(index,1);
        }
    }
});