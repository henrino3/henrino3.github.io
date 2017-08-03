angular.module('henrymascot', ['starter.controllers', 'ngRoute'])

.run(function ($rootScope) {
    $rootScope.hello = function () {
        console.log('hello');
    }
})

.run(['$http', function ($http) {
    $http.defaults.headers.common['Authorization'] = 'X-Auth-Token';
}])


.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common['Authorization'] = 'X-Auth-Token';
}])

.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'AppController'
            })
            .when('/blog', {
                templateUrl: 'templates/blog.html',
                controller: 'AppController'
            })
            .otherwise({
                redirectTo: 'templates/home.html'
            })
    })
    /*
    .config( function($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }
    )*/