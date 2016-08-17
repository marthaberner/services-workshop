app.controller('PostMessageController', function ($scope, MessagesService, $location) {
  $scope.vw = {};
  $scope.vw.success = "Success!!"
  $scope.addNew = function(message){
    var newid = MessagesService.all.length+1
    var send = {
      id: newid,
      text: message
    }
    MessagesService.add(send)
  }
  $scope.form = {}
  $scope.form.message = ''
  $scope.home = function(){
    $location.path('/')
  }
})
