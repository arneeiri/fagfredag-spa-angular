angular.module('yrApp').controller('HomeCtrl', function ($scope, yrService, searchService) {
    yrService.getForecast({place: 'Oslo', municipality: 'Oslo', county: 'Oslo'}).then(function(forecast) {
        console.log(forecast);
        $scope.forecast = forecast;
        forecast.periods[0].selected = true;
  });

    $scope.select = function(period) {
        $.each($scope.forecast.periods, function(i) {
           $scope.forecast.periods[i].selected = false;
        });
        period.selected = true;
    }

    $scope.search = function(q) {
        searchService.search(q).then(function(result) {
            $scope.searchResult = result;
            console.log(result);
        });
    }

    $scope.getWeather = function(location) {
        $scope.q = '';
        $scope.searchResult = null;
        yrService.getForecast({place: location.name, municipality: location.municipality, county: location.county}).then(function(forecast) {
            console.log(forecast);
            $scope.forecast = forecast;
            forecast.periods[0].selected = true;
        });
    }
});
