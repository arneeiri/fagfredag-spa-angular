angular.module('yrApp').controller('searchController', function($scope, searchService) {
    $scope.search = function(q) {
        searchService.search(q).then(function(result) {
            $scope.searchResult = result;
            console.log(result);
        });
    };

    $scope.getWeatherInternal = function(location) {
        $scope.q = '';
        $scope.searchResult = null;
        $scope.getWeather(location);
    };
});
