package app

import com.stripe.model.Charge
import grails.converters.JSON

class PaymentController {

    def index() { }

    def pay() {
        def data = new PaymentData(request.JSON)
        def amountInCents = (data.getAmount() * 100) as Integer

        def chargeParams = [
            'amount': amountInCents,
            'currency': 'eur',
            'card': data.getStripeToken(),
            'description': data.getDescription()
        ]

        try {
            Charge.create(chargeParams, 'sk_test_iQ1RBzwNTJSrzWxjSItu9xVr')
            log.info('Payment is done')
            render data as JSON
        } catch(CardException) {
            log.error('Something went wrong!')
            response.status = 500;
        }
    }

    def confirmation(String msg) {
        [msg: msg]
    }
}
