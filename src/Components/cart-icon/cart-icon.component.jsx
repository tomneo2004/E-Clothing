import React from 'react';
import {ReactComponent as ShopIcon} from '../../Assets/shopping-bag.svg';
import'./cart-icon.styles.scss';

const CartIcon = ()=>{

    return (
        <div className='cart-icon'>
            <ShopIcon className='shopping-icon' />
            <span className='item-count'>{'0'}</span>
        </div>
    );
}

export default CartIcon;