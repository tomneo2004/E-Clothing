import {SET_CURRENT_USER} from './user.action.type';

export const SetCurrentUser = (user)=>({
    type:SET_CURRENT_USER,
    payload:user
});