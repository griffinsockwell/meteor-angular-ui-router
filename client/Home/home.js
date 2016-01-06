angular.module('planet-facts').controller('HomeCtrl', function($scope, $reactive) {
  $reactive(this).attach($scope);

  this.subscribe('home-facts');

  this.helpers({
    facts() {
        return Facts.find({}, {
          sort: {
            submitted: -1
          }
        });
      },
      hasFacts() {
        return Boolean(Facts.find().count());
      }
  });

});
