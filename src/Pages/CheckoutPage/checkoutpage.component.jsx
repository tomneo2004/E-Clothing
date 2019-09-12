import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {SelectCartItems, SelectCartTotal} from '../../Redux/cart/cart.selector';
import CheckoutItem from '../../Components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../Components/stripe-checkout-button/stripe-checkout-button.component';

import './checkoutpage.styles.scss';

const CheckoutPage = ({cartItems, total})=>{

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item=>(<CheckoutItem key={item.id} cartItem={item} />))
            }
            <div className='total'>{`Total Price:${total}`}</div>
            <div className='test-warning'>
                *Please use following credit card for payment*
                <br />
                4242 4242 4242 4242 - Exp:01/20 - CW:123
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems:SelectCartItems,
    total:SelectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);