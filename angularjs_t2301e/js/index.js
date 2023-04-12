
let app = angular.module("myApp",["ngRoute"]);
app.controller("firstController", myController);
function myController($scope){
    $scope.name = "Nguyen Van A";
    $scope.className = "T2301E";
    $scope.count = 0;
    let students = ['Nguyen Van A', 'Nguyen Van B', 'Nguyen Van C'];
    $scope.students = students;
    let productArr = [{name:"IphoneX",price:1000, createdAt: new Date('02/20/2020')},
        {name:"IphoneXS",price:5000, createdAt: new Date('03/20/2020')},
        {name:"Nokia",price:2000, createdAt: new Date('04/20/2020')},
        {name:"SamSung",price:40000, createdAt: new Date('05/20/2020')}
    ];
    console.log(JSON.stringify(productArr))
    $scope.products = productArr;
    let std1 = {name:"Nguyen Van A", className :"T2310E"};
    $scope.std1 = std1;
    let limit = 2;
    let offset = 0;
    let maxPage = 2;
    $scope.limit = limit;
    $scope.startOffset = offset;
    $scope.pre = function(){
       offset = offset - limit;
        $scope.startOffset = offset;
    }
    $scope.next = function(){
        offset = offset + limit;
        $scope.startOffset = offset;
    }
    $scope.searchKey = "";
    $scope.color  = "pink";
    console.log("My string json: "+JSON.stringify(productArr))

};
app.filter("myFilter", function (){
 return function(x){
     return x.toUpperCase();
 }
})

app.config(function ($routeProvider){
    $routeProvider.when("/about",{
        templateUrl: "about.html"
    }).when("/contact",{
        templateUrl: "contact.html"
    })
})

app.directive("myDirective", function (){
    return {
        restrict :"E",
        template : "<h1>This is element Directive</h1>"
    }
})

app.directive("myAttributeDirective", function (){
    return {
        restrict :"A",
        template : "<h1>This is attribute Directive</h1>"
    }
})


app.directive("myClassDirective", function (){
    return {
        restrict :"C",
        template : "<h1>This is class Directive</h1>"
    }
})

app.directive("cmd", function (){
    return {
        restrict :"M",
        replace : true,
        template : "<h1>This is cmd Directive</h1>"
    }
})

app.run(function ($rootScope){
    $rootScope.color = "blue";
})

app.controller("topController", function ($scope, $http){
    $http.get("https://jsonplaceholder.typicode.com/todos/1").
        then(function (response){
            console.log("data "+response.data.title);
    })
    $scope.color = "red";
})

app.controller("secondController", function ($scope, $http){
    $http.get("../data/data.json").
    then(function (response){
        $scope.products = response.data;
    })
    $scope.color = "red";
})


