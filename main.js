var app = angular.module('my-app', []);

app.controller('MainCtrl', function($scope, $window){
	window.navigator.geolocation.getCurrentPosition(function(position){
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		var acc = position.coords.accuracy;
		
		$scope.$apply(function(){
			$scope.lat = lat;
			$scope.lng = lng;			
			$scope.acc = acc;						
		});
	});
});