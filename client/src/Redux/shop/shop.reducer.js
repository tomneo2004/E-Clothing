// import shopData from './shop.data';
import ShopActionTypes from './shop.types';


const initState = {
    collections:null,
    isFetching:false,
    errorMessage:undefined
}

const shopReducer = (state = initState, action)=>{

    switch(action.type){

        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {...state, isFetching:true};
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {...state, isFetching:false, collections:action.payload};
        case ShopActionTypes.FETCH_COLLECTIONS_FAIL:
            return {...state, isFetching:false, errorMessage:action.payload};
        default:
            return state;
    }
}

export default shopReducer