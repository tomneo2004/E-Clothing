import shopData from './shop.data';

const initState = {
    collections:shopData
}

const shopReducer = (state = initState, action)=>{

    switch(action.type){

        default:
            return state;
    }
}

export default shopReducer