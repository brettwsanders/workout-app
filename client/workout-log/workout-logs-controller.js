(function(){

  angular.module('workoutApp')
  .controller('WorkoutLogsController', WorkoutLogsController);

  WorkoutLogsController.$inject = ['workoutFactory', '$rootScope'];

  function WorkoutLogsController (workoutFactory, $rootScope) {
    var vm = this;
    
    vm.workouts = [];
    vm.error = '';
    vm.deleteEntry = deleteEntry;
    updateLog();

    $rootScope.$on('newWorkoutSaved', function() {
      updateLog();
    });

    function updateLog() {
      workoutFactory.getWorkoutLog()
      .then(function (data) {
        vm.workouts = data.data;
      })
      .catch(function (err) {
        vm.error = err;
      }); 
    }

    function deleteEntry (id) {
      workoutFactory.deleteWorkout(id)
      .then(function (data) {
        console.log(data);
        vm.workouts = data.data;
      })
      .catch(function (err) {
        vm.error = err;
      });
    }
  }
  
})();

