/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appComponentsStyles.FilterRow', []);

    thisModule.controller('FilterRowController',
        function ($scope) {
            $scope.topic1 = ['low', 'normal', 'high'];
            $scope.topic2 = ['goals', 'tasks', 'all'];
            $scope.topicModel1 = $scope.topic1[1];
            $scope.topicModel2 = $scope.topic2[0];
        }
    );

})();
