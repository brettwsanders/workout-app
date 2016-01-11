(function(){

  angular.module('workoutApp')
  .directive('workoutForm', workoutForm);

  function workoutForm () {
    return {
      restrict: 'E',
      controller: 'newWorkoutController',
      controllerAs: 'vm',
      templateUrl: 'new-workout-form/form-template.html',
      scope: {}
    };
  }

})();


