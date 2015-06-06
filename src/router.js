var app = angular.module('storyNoteApp', [
    'ngRoute',
    'ngDragDrop'
]).
config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        
        $routeProvider.
        when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController'
        }).
        when('/beginner', {
            templateUrl: 'views/beginner.html',
            controller: 'beginnerController'
        }).
        when('/intermediate', {
            templateUrl: 'views/intermediate.html',
            controller: 'intermediateController'
        }).
        when('/advanced', {
            templateUrl: 'views/advanced.html',
            controller: 'advancedController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
])  

