angular.module('app').controller('ctrl', function($scope){
  $scope.resize = function(){
    console.log("div clicked");
  }
  $scope.doTheThing = function(){
    $scope.isClicked = !$scope.isClicked;
    $scope.myStyle={backgroundColor: $scope.isClicked ? 'blue' : 'purple'};

  }
}).directive("myDir", function(){
  return {
    template: '<div style="height: 100px; background-color: blue;"></div>'
  }
})
