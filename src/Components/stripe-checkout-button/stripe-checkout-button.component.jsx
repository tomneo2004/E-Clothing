import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';
import {CheckoutButton} from './stripe-checkout-button.styles';

const StripeCheckoutButton = ({price})=>{
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_JT71xc1nGelbL46R1IlqxJik00UmOnFEvN';

    const onToken = token=>{
        console.log(token);
        alert('Payment successful');
    }

    return (
        <CheckoutButton
            label='Pay Now'
            name='E-Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${price}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;