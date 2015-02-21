var app = angular.module('app');

app.service('PaymentService', function ($resource) {
    var TransferResource = $resource('pay');

    this.pay = function (cardToken, amount, successCb, errorCb) {
        TransferResource.save({
            stripeToken: cardToken,
            amount: amount
        }, successCb, errorCb);
    }
});