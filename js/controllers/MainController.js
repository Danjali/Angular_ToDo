app.controller('MainController', ['$scope', ($scope) => {
  $scope.title = 'ToDo List';
  $scope.todoList =[];

  $scope.addToList = function() {
    if($scope.todoInput) {
       $scope.todoList.push({ todoText: $scope.todoInput, done: false });
       $scope.todoInput = '';
       // adding property 'id' to each object of the array
       $scope.todoList.forEach((item, i) =>  item.id = i + 1; );
     }
   };

   $scope.removeFromList = function(id) {
       let oldList = $scope.todoList;
       $scope.todoList = [];
       // filter items from the list
       $scope.todoList = oldList.filter(item => item.id !== id; );
   };

  $scope.markAsComplete = function() {
      let list = $scope.todoList;
      $scope.completedList = list.filter(item => { item.done === true; ); // adding property 'flag' to each object of the array to show
        $scope.completedList.forEach(item =>  item.flag = true; );
      };

   $scope.removeAll = function() { // remove all items from list
     $scope.todoList = [];
   };

}]);
