import {createSelector} from 'reselect';

const selectCart = state=>state.cart;

export const SelectCartItems = createSelector(
    [selectCart],
    
    cart=>cart.cartItems
);

export const SelectCartItemCount = createSelector(
    [SelectCartItems],

    cartItems=>cartItems.reduce((acc, item)=>acc+item.quantity, 0)
);

export const SelectCartHidden = createSelector(
    [selectCart],

    cart=>cart.cartHidden
);

export const SelectCartTotal = createSelector(
    [SelectCartItems],

    cartItems=>cartItems.reduce((acc, item)=>acc + item.quantity * item.price, 0)
);