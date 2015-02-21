var app = angular.module('app');

app.controller('IndexCtrl', function ($scope) {

});

app.controller('PayCtrl', function ($scope, stripe, PaymentService) {
	$scope.data = {
		receiver: '',
		account_number: '',
		bill_number: '',
		reference_number: '',
        amount: '0.00',
        cardNumber : '',
        verificationCode : '',
        expMonth : '',
        expYear : ''
	};

    $scope.paymentDone = function () {
        console.log('Payment is done');
    };

    $scope.postPayment = function (formData) {
        stripe.card.createToken({
            number: formData.cardNumber,
            cvc: formData.verificationCode,
            exp_month: formData.expMonth,
            exp_year: formData.expYear
        })
        .then(function (token) {
            PaymentService.pay(token, formData.amount, $scope.paymentDone, function () {
                console.error('Something went wrong when submitting the amount!');
            })
        })
        .catch(function (err) {
            console.error('An error occurred!', err);
        });
    };
});