angular.module('yrApp').controller('HomeCtrl', function ($scope, yrService) {
    yrService.getForecast({place: 'Oslo', municipality: 'Oslo', county: 'Oslo'}).then(function(forecast) {
        console.log(forecast);
        $scope.forecast = forecast;
        forecast.periods[0].selected = true;
        $scope.nowPeriod = forecast.periods[0];
  });

    $scope.select = function(period) {
        $.each($scope.forecast.periods, function(i) {
           $scope.forecast.periods[i].selected = false;
        });
        period.selected = true;
        console.log('clack');
    }
});
