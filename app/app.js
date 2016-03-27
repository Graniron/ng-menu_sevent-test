var app = angular.module('Menu', ['ngRoute']);
      
app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'app/views/menu.html',
    controller: "MenuCTRL"
  })
  .when('/order',{
    templateUrl: 'app/views/order.html',
    controller: "OrderCTRL"
  })
 .otherwise({redirectTo:'/'});
}]);