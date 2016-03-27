app.factory('orderListFactory', function(){
  var order = {};
  order.list = [];
  order.total = 0;
  
  order.add_to_order = function(item){
    order.list.push(item);
    order.total += item.price;
  };
  return order;
});