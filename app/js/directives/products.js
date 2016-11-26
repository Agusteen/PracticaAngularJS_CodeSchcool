'use strict';
var app = angular.module('storeProducts', ['ngRoute']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');	
}]);

app.directive('productTitle', function(){
	return {
		restrict: 'A',
		templateUrl: 'partials/product-title.html'		
	};
});

app.directive('productPanels', function(){
	return {
		restrict: 'E',
		templateUrl: 'partials/product-panels.html',
		controller: function(){
			this.tab = 1;

			this.selectTab = function (setTab){
				this.tab = setTab;		
			};

			this.isSelected = function(checkTab){		
				return this.tab === checkTab;
			};
		},
		controllerAs: 'panel'
	};
});


