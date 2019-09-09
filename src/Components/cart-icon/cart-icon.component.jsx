import React from 'react';
import {ReactComponent as ShopIcon} from '../../Assets/shopping-bag.svg';
import'./cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../Redux/cart/cart.actions.js';

const CartIcon = ({toggleCartHidden})=>{

    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShopIcon className='shopping-icon' />
            <span className='item-count'>{'0'}</span>
        </div>
    );
}

const mapDispatchToProps = (dispatch)=>({

    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);