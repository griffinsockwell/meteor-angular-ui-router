angular.module('planet-facts').controller('FactCardCtrl', function($scope, $reactive) {
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

  this.formatTime = (time) => {
    return moment(time).fromNow()
  };

  this.factOwner = (fact) => {
    if (Meteor.user()) {
      return Boolean(fact.author === Meteor.user().username);
    }
  };

  this.updateCount = () => {
    var charLength = document.getElementById('updateFactChars').value.length;
    this.count = charLength;
  };

  this.editFact = () => {
    this.editing = !this.editing;
  };

  this.removeFact = (fact) => {
    if (confirm("Are you sure you want to delete this fact?")) {
      Meteor.call('removeFact', fact._id);
    }
  };

  this.updateFact = (fact) => {
    Meteor.call('updateFact', fact._id, fact.fact);

    this.editing = !this.editing;
  };

});
