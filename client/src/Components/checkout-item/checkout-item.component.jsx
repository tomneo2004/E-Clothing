import React from 'react';
import {connect} from 'react-redux';
import {clearItem, addItem, removeItem} from '../../Redux/cart/cart.actions';

import {CheckoutItemContainer, ImageContainer, NameLable,
QuantityLabel, PriceLabel, RemoveButton} from './checkout-item.styles';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem})=>{

    const {name, imageUrl, price, quantity} = cartItem;
    return (

        <CheckoutItemContainer>
            <ImageContainer>
                <img src={`${imageUrl}`} alt='item' />
            </ImageContainer>
            <NameLable>{name}</NameLable>
            <QuantityLabel>
                <div className='arrow' onClick={()=>removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
            </QuantityLabel>
            <PriceLabel>{price}</PriceLabel>
            <RemoveButton
            onClick={()=>clearItem(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

const mapDispatchToProps = (dispatch)=>({
    clearItem:(item)=>dispatch(clearItem(item)),
    addItem:(item)=>dispatch(addItem(item)),
    removeItem:(item)=>dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);