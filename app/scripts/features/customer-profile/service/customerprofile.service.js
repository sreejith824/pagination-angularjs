(function () {

  'use strict';

  angular.module('customerprofile-pagination-app')
    .service('CustomerprofileService', CustomerprofileService);

  CustomerprofileService.$inject = ['$http', '$q'];

  function CustomerprofileService($http, $q) {
    var CustomerprofileService = this;
    return {
      getCustomerprofile: getCustomerprofile
    }

    function getCustomerprofile(name, page, size) {
      var deferred = $q.defer();
      
      var url = "http://localhost:8080/v1/customerprofile/?&page=" + page + "&size=" + size ;
      $http.get(url).then(function (data) {
        deferred.resolve(data);          
        });
        return deferred.promise;
    }
  }

})();