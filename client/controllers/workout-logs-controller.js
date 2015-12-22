(function(){

  angular.module('workoutApp')
  .controller('workoutLogsController', workoutLogsController);

  workoutLogsController.$inject = ['workoutFactory'];

  function workoutLogsController (workoutFactory) {
    var vm = this;
    
    vm.workouts = [];
    vm.error = '';
    vm.getInfoById = getInfoById;

    workoutFactory.getWorkoutLog()
    .then(function (data) {
      vm.workouts = data.data;
    })
    .catch(function (err) {
      vm.error = err;
    });

    function getInfoById (id) {
      console.log(id);
    }
  }
  
})();

