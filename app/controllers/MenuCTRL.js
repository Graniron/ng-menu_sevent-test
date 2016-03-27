app.controller('MenuCTRL', ["orderListFactory", "$scope", "$http", function(orderListFactory, $scope, $http) {
        
  $http.get("../../data/menu.json").then(function(response) {
    $scope.menu = response; 
  });
  $scope.order = orderListFactory;
    
  $scope.add_to_order = function(index) {
    $scope.order.add_to_order($scope.menu.data[index]);
  }
}]);