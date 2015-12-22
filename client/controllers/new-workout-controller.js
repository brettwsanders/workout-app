angular.module('workoutApp')
.controller('newWorkoutController', newWorkoutController);

function newWorkoutController () {
  var vm = this;
  vm.newWorkout = {};

  vm.saveWorkout = function () {
    console.log(vm.newWorkout);
  };
}