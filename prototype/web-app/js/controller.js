var app = angular.module('app');

app.controller('IndexCtrl', function ($scope) {

});

app.controller('PayCtrl', function ($scope) {
	$scope.data = {
		'receiver': '',
		'account_number': '',
		'bill_number': '',
		'reference_number': ''
	};
});