import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';


const CartDropdown = ({cartItems})=>{

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(item=><CartItem key={item.id} item={item} />)
                }
            </div>
            <CustomButton>{'Check out'}</CustomButton>
        </div>
    );
}

const mapStateToProps = (state)=>({
    cartItems:state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);