import UserActionTypes from './user.action.type';

export const SetCurrentUser = (user)=>({
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user
});

export const GoogleSignInStart = ()=>({
    type:UserActionTypes.GOOGLE_SIGN_IN_START
});

export const EmailSignInStart = (emailAndPassword)=>({
    type:UserActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
});

export const SignInSuccess = (user)=>({
    type:UserActionTypes.SIGN_IN_SUCCESS,
    payload:user
});

export const SignInFail = (error)=>({
    type:UserActionTypes.SIGN_IN_FAIL,
    payload:error
});

export const CheckUserSession = ()=>({
    type:UserActionTypes.CHECK_USER_SESSION
});

export const SignOutStart = ()=>({
    type:UserActionTypes.SIGN_OUT_START
});

export const SignOutSuccess = ()=>({
    type:UserActionTypes.SIGN_OUT_SUCCESS
});

export const SignOutFail = (error)=>({
    type:UserActionTypes.SIGN_OUT_FAIL,
    payload:error
});

export const SignupStart = (userCredential)=>({
    type:UserActionTypes.SIGN_UP_START,
    payload:userCredential
});

export const SignupSuccess = ({user, additionalData})=>({
    type:UserActionTypes.SIGN_UP_SUCCESS,
    payload:{user, additionalData}
});

export const SignupFail = (error)=>({
    type:UserActionTypes.SIGN_UP_FAIL,
    payload:error
});