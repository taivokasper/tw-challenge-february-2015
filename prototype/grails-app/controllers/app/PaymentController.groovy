package app

import com.stripe.model.Charge

class PaymentController {

    def index() { }

    def pay(String stripeToken, Double amount) {
        def amountInCents = (amount * 100) as Integer

        def chargeParams = [
            'amount': amountInCents,
            'currency': 'eur',
            'card': stripeToken,
            'description': 'customer@sample.org'
        ]

//        def status
        try {
            Charge.create(chargeParams)
//            status = 'Your purchase was successful.'
            response.status = 200;
        } catch(CardException) {
//            status = 'There was an error processing your credit card.'
            response.status = 500;
        }
    }

    def confirmation(String msg) {
        [msg: msg]
    }
}
