import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {SelectCartItems} from '../../Redux/cart/cart.selector.js';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../Redux/cart/cart.actions.js';



const CartDropdown = ({cartItems, history, dispatch})=>{

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length > 0?
                    cartItems.map(item=><CartItem key={item.id} item={item} />)
                    :
                    <span className='empty'>{'Cart is empty'}</span>
                }
            </div>
            <CustomButton onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>{'Check out'}</CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems:SelectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));