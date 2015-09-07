var app = angular.module('simple-ui-router', ['ui.router']);

app.config(function($stateProvider) {
  $stateProvider
    .state('party', {
      url: '/party',
      template: '<h1>We are on the party</h1>'
    })
    .state('partyDetail', {
      url: '/partyDetail/:partyID/:partyLocation',
      controller: function($scope, $stateParams) {
        $scope.partyID = $stateParams.partyID;
        $scope.partyLocation = $stateParams.partyLocation;
      },
      template: '<div>The party is {{partyID}} in {{partyLocation}}</div>'
    });
});
