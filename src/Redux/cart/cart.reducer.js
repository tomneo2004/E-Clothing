import CartActionTypes from './cart.types';

const initState = {
    cartHidden: true
}
const cartReducer = (state = initState, action)=>{

    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {...state, cartHidden:!state.cartHidden};

        default:
            return state; 
    }
}

export default cartReducer;