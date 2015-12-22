angular.module('workoutApp')
.directive('workoutForm', workoutForm);

function workoutForm () {
  return {
    restrict: 'E',
    controller: 'newWorkoutController',
    controllerAs: 'vm',
    templateUrl: './templates/form-template.html',
    scope: {},
    link: function() {
      Date.prototype.toDateInputValue = function() {
          var local = new Date(this);
          local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
          return local.toJSON().slice(0,10);
      };

      $(document).ready( function() {
        $('#date-selector').val(new Date().toDateInputValue());
      });
    }
  };
}
