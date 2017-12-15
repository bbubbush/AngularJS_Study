
// 총 3가지 factory, service, provider의 메서드가 존재
// 각 기능별 차이는 
// 가장 기본적인것은 팩토리  가장 난이도 높은 것은 provider

angular.module("todoApp").constant('baseURL', 'http://localhost:2403/todolist').factory("todoSt", function($http, baseURL){
    var storage = {
        data : [],
        add : function(newTodoTitle){
            var newTodo = {
                title: newTodoTitle,
                completed: false,
                createdAt: Date.now()
            };

            $http({
                method : "POST"
                , url : baseURL
                , data : newTodo
            }).then(function(resp){
                // console.log(resp);
                storage.data.push(resp.data);
            })

            // storage.data.push(newTodo);
            // storage._setStorage();
        },
        read : function(){
            $http({
                method : "GET"
                , url : baseURL
            }).then(function(resp){
                // console.log(resp);
                angular.copy(resp.data, storage.data);
                
            });
            return storage.data;
        },
        update : function(todo){
            $http({
                method : "PUT"
                , url : baseURL + '/' + todo.id
                , data : todo
            }).then(function(resp){
                console.log(resp);
            })
            // storage._setStorage();
        },
        remove : function(todo){
            $http({
                method : "DELETE"
                , url : baseURL + '/' + todo.id
            }).then(function(){
                storage.data.splice(storage.data.indexOf(todo), 1);
            })
            // storage.data.splice(index, 1);
            // storage._setStorage();
        },
        _setStorage : function(){
            localStorage.setItem("data", JSON.stringify(storage.data));
        },
        _getStorage : function(){
            return JSON.parse(localStorage.getItem("data"));
        }

    }
    
    return storage
})