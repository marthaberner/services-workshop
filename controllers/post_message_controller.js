app.controller('PostMessageController', function ($scope, MessagesService, $location) {
  $scope.vw = {};
  $scope.vw.success = "Success!!"
  $scope.vw.add = function(message){
    MessagesService.add(message);
    $location.url('/');
  }

})
