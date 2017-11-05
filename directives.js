angular.module('todoApp').directive('todoItem', function(){
    return {
        templateUrl : 'tpl_todoItem.html'
    }
}).directive('todoForm', function(){
    return {
        templateUrl : 'tpl_todoForm.html'
    }
});