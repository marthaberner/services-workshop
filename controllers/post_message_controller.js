app.controller('PostMessageController', function ($scope, MessagesService, $location) {
  $scope.vw = {};
  $scope.vw.success = "Success!!"
  $scope.vw.submitMessage = function (message) {
    MessagesService.add(message);
    $location.path('/');
  };
})
