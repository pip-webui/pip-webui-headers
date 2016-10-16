/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appComponentsStyles.RefTitle', []);

    thisModule.controller('RefTitleController',
        function($scope) {
            $scope.code = "<div class='pip-ref-title' layout='row'>";
            $scope.code += "<img class='pip-pic' src='http://static.diary.ru/userdir/6/7/7/1/677144/47464972.jpg'>"
                /*<div flex layout='column' layout-align='center start' class='pip-content'>
                <p class='pip-title'>Title</p>
                <p class='pip-subtitle'>Subtitle</p>
                </div>
                </div>*/;
        }
    );

})();
