app.service('dataService', ['$http','$q', function($http, $q){

  function getData(){
      return $http.get('/data').then(function(data){
          console.log(status);
          return data;
      }).catch(function(err) {
        console.error('404 not found');
      });
  }

  // $http.get('/someUrl', config).then(successCallback, errorCallback);


  return {
    getData: getData
  }

  /*
    The code above is equivalent to this code below
    Because we are suppose to return an object method from dataService in which case can be transposed as this for a basic example

    var dataService = {};

    dataService.getData() {
      return $http.get('js/data/data.json').then(function(data){
          return data;
      });
    }

    return dataService = {
      getData: getData
    }

    if we log dataService we'll see this


    dataService = {

    }

  */

  //DO NOT DELETE
  // Using Promises
  // var deferred = $q.defer();
  // $http.get('js/data/data.json').then(function(data){
  //   deferred.resolve(data);
  // });
  //
  // this.getData = function() { // call this from the controller then run some other code while deferred
  //   return deferred.promise;
  // }

}]);
