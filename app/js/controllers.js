'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Galaxy S5',
     'snippet': 'dont wory the S6 is coming next month.'},
    {'name': 'iPhone 6',
     'snippet': 'kinda looks like the iPod 3.'},
    {'name': 'LG G3',
     'snippet': 'Sweet screen.'},
    {'name': 'Windows phone?',
     'snippet': 'LOL Yeah right!'}
  ];
});
