angular.module('planet-facts').controller('AuthorCtrl', function($scope, $stateParams, $reactive) {

  $reactive(this).attach($scope);

  this.subscribe('author-facts', () => {
    return [$stateParams.author]
  });

  this.helpers({
    facts() {
        return Facts.find({}, {
          sort: {
            submitted: -1
          }
        });
      },
      authorPage() {
        return $stateParams.author;
      },
      canAddFact() {
        if (Meteor.user()) {
          return Boolean($stateParams.author === Meteor.user().username);
        }
      },
      hasFacts() {
        return Boolean(Facts.find().count());
      }
  });

});
