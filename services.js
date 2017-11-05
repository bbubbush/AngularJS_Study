
// 총 3가지 factory, service, provider의 메서드가 존재
// 각 기능별 차이는 
// 가장 기본적인것은 팩토리  가장 난이도 높은 것은 provider

angular.module("todoApp").factory("todoSt", function(){
    var storage = {
        data : [],
        add : function(newTodoTitle){
            var newTodo = {
                title: newTodoTitle,
                completed: false,
                createdAt: Date.now()
            };
            storage.data.push(newTodo);
            storage._setStorage();
        },
        read : function(){
            angular.copy(storage._getStorage(), storage.data);
            return storage.data;
        },
        update : function(){
            storage._setStorage();
        },
        remove : function(index){
            storage.data.splice(index, 1);
            storage._setStorage();
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