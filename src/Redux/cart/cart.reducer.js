import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.util';

const initState = {
    cartHidden: true,
    cartItems:[]
}
const cartReducer = (state = initState, action)=>{

    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {...state, cartHidden:!state.cartHidden};
        case CartActionTypes.ADD_ITEM:
            return {...state, cartItems:addItemToCart(state.cartItems, action.payload)};

        default:
            return state; 
    }
}

export default cartReducer;