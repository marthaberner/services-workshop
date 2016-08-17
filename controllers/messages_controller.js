app.controller('MessagesController', function ($scope, MessagesService) {
  $scope.vw = {};
  $scope.messages = MessagesService.all
})
