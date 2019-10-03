import UserActionTypes from './user.action.type';

const initState = {
    currentUser:null,
    error:null,
    signupError:null
}

const UserReducer = (state = initState, action)=>{

    switch(action.type){

        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser:action.payload,
                error:null
                };
        
        case UserActionTypes.SIGN_OUT_FAIL:
        case UserActionTypes.SIGN_IN_FAIL:
            return {
                ...state,
                error:action.payload
            };
        case UserActionTypes.SIGN_UP_FAIL:
                return {
                    ...state,
                    signupError:action.payload
                };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser:null,
                error:null
            }
        default:
            return state;
    }
}

export default UserReducer;