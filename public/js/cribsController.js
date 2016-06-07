// Common
app.controller('cribsController', ['$scope', '$http', 'dataService', function($scope, $http, dataService) {

    $scope.cribs;

    $scope.priceInfo = {
      min: 0,
      max: 100000
    }


    // Normal injected Service from services.js
    // Hey run this function but come back so i can do the code inside here
    // dataService.getData().then(function(data) {
    //     $scope.cribs = data.data;
    // });

    dataService.getData().then(function(data){
      console.log("Status: " + data.status);
      $scope.cribs = data.data;

    }).catch(function(err) {
      console.error(err);
    });


    // Promises Alternative DO NOT DELETE
    // var promise = dataService.getData();
    //
    // promise.then(function(data){
    //   $scope.cribs = data.data;
    // });
    // var deferred = $q.defer();

    // console.log(deferred);
}]);
