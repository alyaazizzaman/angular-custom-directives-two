var app = angular.module('diceApp', []);

app.directive('gsDice', function() {
  return {
    controller: ['$scope', function($scope) {
      $scope.rollDice = function() {
        var number = Math.round((Math.random() * (6 - 1) + 1));
        return number;
      };
    }],
    template: '<div class="dice"></div>',
    link: function(scope, element, attrs) {

      element.on('click', function() {
        element.children().text(scope.rollDice());
        console.log(scope.rollDice());

      });
    }
  };
});
