import React from 'react';
import {ReactComponent as ShopIcon} from '../../Assets/shopping-bag.svg';
import'./cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../Redux/cart/cart.actions.js';
import {SelectCartItemCount} from '../../Redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount})=>{

    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShopIcon className='shopping-icon' />
            <span className='item-count'>{`${itemCount}`}</span>
        </div>
    );
}

const mapDispatchToProps = (dispatch)=>({

    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: SelectCartItemCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);