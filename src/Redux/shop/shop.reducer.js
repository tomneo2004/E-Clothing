// import shopData from './shop.data';
import ShopActionTypes from './shop.types';

const initState = {
    collections:null
}

const shopReducer = (state = initState, action)=>{

    switch(action.type){

        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {...state, collections:action.payload};
        default:
            return state;
    }
}

export default shopReducer