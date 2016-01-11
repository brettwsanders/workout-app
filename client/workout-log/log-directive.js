(function () {

  angular.module('workoutApp')
  .directive('workoutLog', workoutLog);

  function workoutLog () {
    return {
      restrict: 'E',
      controller: 'workoutLogsController',
      controllerAs: 'vm',
      templateUrl: 'workout-log/log-template.html',
      scope: {}
    };
  }
  
})();