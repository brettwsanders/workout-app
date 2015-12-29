(function(){

  angular.module('workoutApp')
  .controller('workoutLogsController', workoutLogsController);

  workoutLogsController.$inject = ['workoutFactory', '$rootScope'];

  function workoutLogsController (workoutFactory, $rootScope) {
    var vm = this;
    
    vm.workouts = [];
    vm.error = '';
    vm.getInfoById = getInfoById;
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
  }
  
})();

