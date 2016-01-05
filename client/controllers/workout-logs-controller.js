(function(){

  angular.module('workoutApp')
  .controller('workoutLogsController', workoutLogsController);

  workoutLogsController.$inject = ['workoutFactory', '$rootScope'];

  function workoutLogsController (workoutFactory, $rootScope) {
    var vm = this;
    
    vm.workouts = [];
    vm.error = '';
    vm.getInfoById = getInfoById;
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

    function getInfoById (id) {
      console.log(id);
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

