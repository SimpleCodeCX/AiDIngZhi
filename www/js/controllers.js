/**
 * Created by simple on 2016/10/15.
 */

angular.module("starter.controllers",[])

.controller('Design_drawingCtrl', ["$scope","$ionicModal",function($scope,$ionicModal) {
  $scope.data="dddd";
  $scope.sho=function () {
    alert();
  }
  $ionicModal.fromTemplateUrl("drawing_details",{
    scope: $scope,
    animation: "slide-in-down"
  }).then (function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
}]);









/*angular.module("starter.controllers",[])
  .controller('ControllerIndex', ["$state",function($state) {
    $state.go("tab");
  }]);*/
