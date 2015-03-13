app.factory('selectService', function() {
    $scope.user = {};

    $scope.update = function(user) {
        $scope.user = angular.copy(user);
    };
});