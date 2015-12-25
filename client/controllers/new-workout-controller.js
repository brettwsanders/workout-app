(function(){

  angular.module('workoutApp')
  .controller('newWorkoutController', newWorkoutController);

  newWorkoutController.$inject = ['workoutFactory'];

  function newWorkoutController (workoutFactory) {
    var vm = this;
    vm.newWorkout = {};
    vm.newWorkout.date = new Date();
    vm.newWorkout.exercise = "Squat";
    vm.newWorkout.weight = 200;
    vm.newWorkout.sets = 3;
    vm.newWorkout.reps = 5;

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


