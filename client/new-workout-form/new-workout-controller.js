(function(){

  angular.module('workoutApp')
  .controller('NewWorkoutController', NewWorkoutController);

  NewWorkoutController.$inject = ['workoutFactory', '$rootScope'];

  function NewWorkoutController (workoutFactory, $rootScope) {
    var vm = this;
    vm.newWorkout = {};
    vm.newWorkout.date = new Date();
    vm.newWorkout.exercise = 'Squat';
    vm.newWorkout.weight = 200;
    vm.newWorkout.sets = 3;
    vm.newWorkout.reps = 5;

    vm.saveWorkout = function () {
      console.log(vm.newWorkout);
    };

    vm.submitWorkout = function () {
      workoutFactory.postWorkout(vm.newWorkout)
      .success(function (status) {
        console.log(status);
        $rootScope.$broadcast('newWorkoutSaved');
      });
    };
  }

})();


