(function(){

  angular.module('workoutApp')
  .factory('workoutFactory', workoutFactory);

  workoutFactory.$inject = ['$http'];

  function workoutFactory ($http) {

    var workoutServices = {
      getWorkoutLog: getWorkoutLog,
      postWorkout: postWorkout
    };

    return workoutServices;

    function getWorkoutLog() {
      return $http({
        method: 'GET',
        url: '/workouts'
      });
    }

    function postWorkout(workout) {
      return $http({
        method: 'POST',
        url: '/workouts/new',
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(workout)
      });
    }
  }
  
})();


