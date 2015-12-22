angular.module('workoutApp')
.directive('workoutLog', workoutLog);

function workoutLog () {
  return {
    restrict: 'E',
    controller: 'workoutLogsController',
    controllerAs: 'vm',
    templateUrl: './templates/log-template.html',
    scope: {}
  };
}