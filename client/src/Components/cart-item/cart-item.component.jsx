import React from 'react';
import {CartItemContainer, CartItemImage, 
    ItemDetailsContainer, ItemName} from './cart-item.styles';

const CartItem = ({item})=>{

    const {name,imageUrl, price, quantity} = item;
    return (
        <CartItemContainer>
            <CartItemImage src={`${imageUrl}`} alt='item' />
            <ItemDetailsContainer>
                <ItemName>{`${name}`}</ItemName>
                <span>{`${quantity} X ${price}`}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
}

export default React.memo(CartItem);