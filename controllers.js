angular.module('todoApp').controller('todoCtrl', function($scope, todoSt, $http){
    
    // $http({
    //     method : "GET"
    //     , url : "data.json"
    // }).then(function(response){
    //     $scope.data = response.data;
    // });

    $scope.data = todoSt.read();

    $scope.remove = function(todo){
        todoSt.remove(todo)
    };

    // add new contents 
    $scope.add = function(newTodoTitle){
        todoSt.add(newTodoTitle)
        $scope.newTodoTitle = "";
    };

    $scope.update = function(todo){
        todoSt.update(todo);
    }
    
});