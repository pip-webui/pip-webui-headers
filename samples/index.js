/* global angular */

(function () {
    'use strict';

    var content = [
        { title: 'Reference Toolbar', state: 'ref_toolbar', url: '/ref_toolbar', controller: 'RefToolbarController', templateUrl: 'ref_toolbar.html' },
        { title: 'Reference Title', state: 'ref_title', url: '/ref_title', controller: 'RefTitleController', templateUrl: 'ref_title.html' },
        { title: 'Details Title', state: 'details_title', url: '/details_title', controller: 'DetailsTitleController', templateUrl: 'details_title.html' },
        { title: 'Progress Top', state: 'progress_top', url: '/progress_top', controller: 'ProgressTopController', templateUrl: 'progress_top.html' },
        { title: 'Filter Row', state: 'filter_row', url: '/filter_row', controller: 'FilterRowController', templateUrl: 'filter_row.html' },
    ];

    var thisModule = angular.module('appComponentsStyles', 
        [
            // 3rd Party Modules
            'ui.router', 'ui.utils', 'ngResource', 'ngAria', 'ngCookies', 'ngSanitize', 'ngMessages',
            'ngMaterial', 'LocalStorageModule', 'ngAnimate',
            'appComponentsStyles.RefToolbar', 'appComponentsStyles.RefTitle',
            'appComponentsStyles.DetailsTitle',  'appComponentsStyles.ProgressTop',
            'appComponentsStyles.FilterRow'
        ]
    );

    thisModule.run(function($log) {
        $log.debug('CSS Components running'); 
    });

    thisModule.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {

         $mdIconProvider.iconSet('icons', '../../lib/images/icons.svg', 512);

//             $mdThemingProvider.theme('blue')
//                 .primaryPalette('blue')
//                 .accentPalette('green');
// 
//             $mdThemingProvider.theme('pink')
//                 .primaryPalette('pink')
//                 .accentPalette('orange');
// 
//             $mdThemingProvider.theme('green')
//                 .primaryPalette('green')
//                 .accentPalette('purple');
// 
//             $mdThemingProvider.theme('grey')
//                 .primaryPalette('grey')
//                 .accentPalette('yellow');
// 
//             $mdThemingProvider.setDefaultTheme('blue');

            for (var i = 0; i < content.length; i++) {
                var contentItem = content[i];
                $stateProvider.state(contentItem.state, contentItem);
            }
                
            $urlRouterProvider.otherwise('/ref_title');
        } 
    );

    thisModule.controller('AppController', 
        function ($scope, $rootScope, $state, $mdSidenav) {
            $scope.languages = ['en', 'ru'];
            $scope.themes = ['blue', 'green', 'pink', 'grey'];

            $scope.selected = {
                theme: 'blue',
                tab: 0  
            };

            $scope.content = content;
            $scope.menuOpened = false;

            $scope.onThemeClick = function(theme) {
                $rootScope.$theme = theme;
            };

            // Update page after language changed
            $rootScope.$on('languageChanged', function(event) {
                console.log('Reloading...');
                console.log($state.current);
                console.log($state.params);

                $state.reload();
            });

            // Update page after theme changed
            $rootScope.$on('themeChanged', function(event) {
                $state.reload();
            });
                        
            $scope.onSwitchPage = function(state) {
                $mdSidenav('left').close();
                $state.go(state);
            };
            
            $scope.onToggleMenu = function() {
                $mdSidenav('left').toggle();
            };
                        
            $scope.isActiveState = function(state) {
                return $state.current.name == state;  
            };
        }
    );

})();
