app.controller('OrderCTRL', ["orderListFactory", "$scope", "$http", function(orderListFactory, $scope, $http) {
        
 $http.get("menu.json").then(function(response) {
   $scope.menu = response; 
 });
   $scope.order = orderListFactory;
}]);