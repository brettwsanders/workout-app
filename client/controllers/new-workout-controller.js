(function(){

  angular.module('workoutApp')
  .controller('newWorkoutController', newWorkoutController);

  newWorkoutController.$inject = ['workoutFactory'];

  function newWorkoutController (workoutFactory) {
    var vm = this;
    vm.newWorkout = {};

    vm.saveWorkout = function () {
      console.log(vm.newWorkout);
    };

    vm.submitWorkout = function () {
      console.log(vm.newWorkout);
      workoutFactory.postWorkout(vm.newWorkout)
      .success(function (status) {
        console.log(status);
      });
    };
  }

})();


