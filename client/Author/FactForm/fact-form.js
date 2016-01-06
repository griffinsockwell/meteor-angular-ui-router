angular.module('planet-facts').controller('FactFormCtrl', function($scope, $reactive) {

  $reactive(this).attach($scope);

  this.count = 0;

  this.helpers({
    submitDisabled() {
      var factChars = this.getReactively('count');
      return (factChars > 0 && factChars <= 160 ? false : true);
    },
    charCount() {
      return parseInt(160 - this.getReactively('count'));
    }
  });

  this.updateCount = () => {
    var charLength = document.getElementById('newFactChars').value.length;
    this.count = charLength;
  };

  this.showFactForm = () => {
    this.formVisible = !this.formVisible;
  };

  this.addFact = (newFact) => {
    Meteor.call('addFact', newFact.planet, newFact.fact);

    this.count = 0;
    this.formVisible = !this.formVisible;
  };

});
