angular.module('yrApp').controller('HomeCtrl', function ($scope, yrService) {
    $scope.select = function(period) {
        $.each($scope.forecast.periods, function(i) {
           $scope.forecast.periods[i].selected = false;
        });
        period.selected = true;
    }

    $scope.selectLocation = function(location) {
        yrService.getForecast({place: location.name, municipality: location.municipality, county: location.county}).then(function(forecast) {
            $scope.forecast = forecast;
            forecast.periods[0].selected = true;
        });
    }
});
