import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {SelectCartItems, SelectCartTotal} from '../../Redux/cart/cart.selector';
import CheckoutItem from '../../Components/checkout-item/checkout-item.component';
 import StripeCheckoutButton from '../../Components/stripe-checkout-button/stripe-checkout-button.component';

import {CheckoutConatiner, CheckoutHeader, 
    HeaderBlock, Total, Warning} from './checkoutpage.styles';

const CheckoutPage = ({cartItems, total})=>{

    return (
        <CheckoutConatiner>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map(item=>(<CheckoutItem key={item.id} cartItem={item} />))
            }
            <Total>{`Total Price:${total}`}</Total>
            <Warning>
                *Please use following credit card for payment*
                <br />
                4242 4242 4242 4242 - Exp:01/20 - CW:123
            </Warning>
            <StripeCheckoutButton price={total} />
        </CheckoutConatiner>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems:SelectCartItems,
    total:SelectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);