(function () {

  'use strict'

  angular.module('scrumboard.demo')
    .controller('LoginController', ['$scope', '$location', 'Login', LoginController])

  function LoginController ($scope, $location, Login) {
    
    $scope.login = function () {
      Login.login($scope.user)
        .then(function () {
          $location.url('/')
        }, function () {
          $scope.login_error = 'Invalid username or password'
        })
    }

    if (Login.isLoggedIn()) {
      $location.url('/')
    }

  }

})()