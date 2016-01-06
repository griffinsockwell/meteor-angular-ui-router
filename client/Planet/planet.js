angular.module('planet-facts').controller('PlanetCtrl', function($scope, $stateParams, $reactive) {

  $reactive(this).attach($scope);

  this.subscribe('planet-facts', () => {
    return [$stateParams.planet]
  });

  this.helpers({
    facts() {
        return Facts.find({}, {
          sort: {
            submitted: -1
          }
        });
      },
      planetPage() {
        return $stateParams.planet;
      },
      hasFacts() {
        return Boolean(Facts.find().count());
      }
  });

});
