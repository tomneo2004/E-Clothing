import {SET_CURRENT_USER} from './user.action.type';

const initState = {
    currentUser:null
}

const UserReducer = (state = initState, action)=>{

    switch(action.type){

        case SET_CURRENT_USER:
            return {...state, currentUser:action.payload}
        default:
            return state;
    }
}

export default UserReducer;