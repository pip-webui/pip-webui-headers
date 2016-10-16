/* global angular */

(function () {
    'use strict';

    var content = [
        { title: 'Reference Item', state: 'ref_item', url: '/ref_item', controller: 'RefItemController', templateUrl: 'ref_item.html' },
        { title: 'Reference Toolbar', state: 'ref_toolbar', url: '/ref_toolbar', controller: 'RefToolbarController', templateUrl: 'ref_toolbar.html' },
        { title: 'Reference Title', state: 'ref_title', url: '/ref_title', controller: 'RefTitleController', templateUrl: 'ref_title.html' },
        { title: 'Reference Expander', state: 'ref_expander', url: '/ref_expander', controller: 'RefExpanderController', templateUrl: 'ref_expander.html' },
        { title: 'Reference List', state: 'ref_list', url: '/ref_list', controller: 'RefListController', templateUrl: 'ref_list.html' },
        { title: 'Simple List', state: 'simple_list', url: '/simple_list', controller: 'SimpleListController', templateUrl: 'simple_list.html' },
        { title: 'Details Title', state: 'details_title', url: '/details_title', controller: 'DetailsTitleController', templateUrl: 'details_title.html' },
        { title: 'Action List', state: 'action_list', url: '/action_list', controller: 'ActionListController', templateUrl: 'action_list.html' },
        { title: 'Drilldown List', state: 'drilldown_list', url: '/drilldown_list', controller: 'DrilldownListController', templateUrl: 'drilldown_list.html' },
        { title: 'Dividers', state: 'dividers', url: '/dividers', controller: 'DividersController', templateUrl: 'dividers.html' },
        { title: 'Check List', state: 'check_list', url: '/check_list', controller: 'CheckListController', templateUrl: 'check_list.html' },
        { title: 'Progress Top', state: 'progress_top', url: '/progress_top', controller: 'ProgressTopController', templateUrl: 'progress_top.html' },
        { title: 'Table', state: 'table', url: '/table', controller: 'TableController', templateUrl: 'table.html' },
        { title: 'Empty', state: 'empty', url: '/empty', controller: 'EmptyController', templateUrl: 'empty.html' },
        { title: 'Chips', state: 'chips', url: '/chips', controller: 'ChipsController', templateUrl: 'chips.html' },
        { title: 'Filter Row', state: 'filter_row', url: '/filter_row', controller: 'FilterRowController', templateUrl: 'filter_row.html' },
        { title: 'Page Errors', state: 'page_errors', url: '/page_errors', controller: 'PageErrorsController', templateUrl: 'page_errors.html' }
    ];

    var thisModule = angular.module('appComponentsStyles', 
        [
            // 3rd Party Modules
            'ui.router', 'ui.utils', 'ngResource', 'ngAria', 'ngCookies', 'ngSanitize', 'ngMessages',
            'ngMaterial', 'LocalStorageModule', 'ngAnimate',
            'appComponentsStyles.RefList', 'appComponentsStyles.Table', 'appComponentsStyles.Chips',
            'appComponentsStyles.RefItem',  'appComponentsStyles.RefToolbar', 'appComponentsStyles.RefTitle',
            'appComponentsStyles.RefExpander', 'appComponentsStyles.DetailsTitle', 'appComponentsStyles.ActionList',  
            'appComponentsStyles.DrilldownList', 'appComponentsStyles.CheckList', 'appComponentsStyles.ProgressTop',
            'appComponentsStyles.Dividers', 'appComponentsStyles.SimpleList', 'appComponentsStyles.Empty',
            'appComponentsStyles.FilterRow', 'appComponentsStyles.PageErrors'
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
                
            $urlRouterProvider.otherwise('/fonts');
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
