(function () {

  'use strict';

  angular.module('customerprofile-pagination-app')
    .controller('CustomerprofileController', CustomerprofileController);

  CustomerprofileController.$inject = ['$scope', 'CustomerprofileService'];

  function CustomerprofileController($scope, CustomerprofileService) {
    var vm = this;
    this.gridOptions = {};
    $scope.gridOptions = {
      paginationPageSizes: [5, 15, 50],      
      columnDefs: [
        { name: 'name' },
        { name: 'product' },
        { name: 'age' }
      ]
    };
    
   CustomerprofileService.getCustomerprofile($scope.gridOptions.paginationCurrentPage, $scope.gridOptions.paginationPageSize).then(function(response) {
      $scope.gridOptions.data = response.data.content;
      console.log($scope.gridOptions);
    });
   


  }

})();