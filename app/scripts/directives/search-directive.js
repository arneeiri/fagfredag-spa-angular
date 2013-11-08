angular.module('yrApp').directive('search', function() {
   return {
       restrict: 'E',
       scope: '@',
       controller: 'searchController',
       templateUrl: 'views/search.html'
   };
});

console.log('what');