import React from 'react';
// import {ReactComponent as ShopIcon} from '../../Assets/shopping-bag.svg';
import {CardIconContainer, ShopIcon, ItemCount} from './cart-icon.styles';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../Redux/cart/cart.actions.js';
import {SelectCartItemCount} from '../../Redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount})=>{

    return (
        <CardIconContainer onClick={toggleCartHidden}>
            <ShopIcon className='shopping-icon' />
            <ItemCount>{`${itemCount}`}</ItemCount>
        </CardIconContainer>
    );
}

const mapDispatchToProps = (dispatch)=>({

    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: SelectCartItemCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);