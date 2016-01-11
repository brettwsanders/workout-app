(function(){

  angular.module('workoutApp')
  .directive('workoutForm', workoutForm);

  function workoutForm () {
    return {
      restrict: 'E',
      controller: 'newWorkoutController',
      controllerAs: 'vm',
      templateUrl: './form-template.html',
      scope: {}
    };
  }

})();


