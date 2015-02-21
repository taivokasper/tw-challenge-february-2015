var app = angular.module('app');

app.controller('IndexCtrl', function ($scope) {

});

app.controller('PayCtrl', function ($scope, stripe, PaymentService, $stateParams) {
	$scope.data = {
		receiver: $stateParams.receiver,
		accountNumber: $stateParams.accountNumber,
		billNumber: $stateParams.billNumber,
		referenceNumber: $stateParams.referenceNumber,
        amount: $stateParams.amount,
        cardNumber : '',
        verificationCode : '',
        expMonth : '',
        expYear : ''
	};

    $scope.paymentDone = function () {
        console.log('Payment is done');
    };

    $scope.postPayment = function () {
        var formData = $scope.data;

        var createTokenData = {
            number: formData.cardNumber,
            cvc: formData.verificationCode,
            exp_month: formData.expMonth,
            exp_year: formData.expYear
        };
        console.log('Create token data:', createTokenData);
        stripe.card.createToken(createTokenData)
        .then(function (token) {
            PaymentService.pay(token.id, formData.amount, $scope.paymentDone, function () {
                console.error('Something went wrong when submitting the amount!');
            })
        })
        .catch(function (err) {
            console.error('An error occurred!', err);
        });
    };
});