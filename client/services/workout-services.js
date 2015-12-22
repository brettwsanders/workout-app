(function(){

  angular.module('workoutApp')
  .factory('workoutFactory', workoutFactory);

  workoutFactory.$inject = ['$http'];

  function workoutFactory ($http) {

    var workoutServices = {
      getWorkoutLog: getWorkoutLog
    };

    return workoutServices;

    function getWorkoutLog() {
      return $http({
        method: 'GET',
        url: '/workouts'
      });
    }
  }
  
})();


