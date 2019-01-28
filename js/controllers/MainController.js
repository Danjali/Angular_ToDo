app.controller('MainController', ['$scope', function ($scope) {
   $scope.title = 'ToDo List';
   $scope.todoList = [];
   $scope.buttonValue = 'Add';

   $scope.addToList = function () {
      if ($scope.buttonValue === 'Add') {
         if ($scope.todoInput && !$scope.todoList.length) {
            $scope.todoList.push({
               todoText: $scope.todoInput,
               done: false
            });
            $scope.todoInput = '';
         } else if (checkDuplicate($scope.todoList)) {
            alert('Duplicate Task');
         } else if ($scope.todoInput) {
            $scope.todoList.push({
               todoText: $scope.todoInput,
               done: false
            });
            $scope.todoInput = '';
         }
      } else {
         if (checkDuplicate($scope.todoList)) {
            alert('Duplicate Task');
         } else if ($scope.todoInput) {
            $scope.todoList[$scope.editedId] = {
               todoText: $scope.todoInput,
               done: false
            };
            $scope.todoInput = '';
            $scope.buttonValue = 'Add';
         } else {
            alert('Task is empty. Add Task!!')
         }
      }
      sortTheList($scope.todoList);
   };

   $scope.removeFromList = function (id) {
      let oldList = $scope.todoList;
      if (id !== -1) {
         // remove items from the list
         oldList.splice(id, 1);
      }
      $scope.todoList = oldList; // re-assign the filtered list
      $scope.buttonValue = 'Add';
   };

   $scope.markAsComplete = function () {
      let list = $scope.todoList;
      $scope.completedList = list.filter(item => item.done === true);
      // adding property 'flag' to each object of the array to show
      $scope.completedList.map(item => item.flag = true);
      sortTheList($scope.todoList);
   };

   $scope.removeAll = function () {
      $scope.todoList = []; // remove all items from list
      $scope.buttonValue = 'Add';
   };

   $scope.editTask = function (id) {
      $scope.buttonValue = 'Update';
      $scope.todoList.forEach((item, key) => {
         if (key === id) {
            $scope.todoInput = $scope.todoList[key].todoText;
            $scope.editedId = id;
         }
      })
   };

   sortTheList = function (updatedList) { //completed tasks will be moved to end of the list
      $scope.todoList = updatedList.sort((a, b) => a.done - b.done);
   };

   checkDuplicate = function (list) {
      let validateFlag;
      list.forEach(item => {
         if (item.todoText === $scope.todoInput) {
            validateFlag = true;
         }
      });
      return validateFlag;
   };

}]);
