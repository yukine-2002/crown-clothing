import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButtom = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JK4O0BiiKzSvzQ0dcnppwX78eQnUZl6KBAOShdbZD1pF4XS6bhyjg0Di7Q9vrpcPOKQ2GZmLzwvQ9iEQIFiI4zm00frl7bPVf';
   
  const  onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }

    return (
        <StripeCheckout
        label='Pay Now'

        name='CRWN Clothing Ltd'

        billingAddress

        shippingAddress

        image='https://svgshare.com/i/CUz.svg'

        description={`Your total is $${price}`}

        amount={priceForStripe}

        panelLabel = 'Pay Now'

        token = {onToken}

        stripeKey={publishableKey}
        
        />
    )
}

export default StripeCheckoutButtom;