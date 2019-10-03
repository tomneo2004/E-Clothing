import {takeLatest, all, call, put} from 'redux-saga/effects';
import UserActionTypes from './user.action.type';
import {Auth, googleProvider, CreateUserProfile, getCurrentUser} from '../../firebase/firebase.utils';
import {SignInSuccess, SignInFail,
SignOutSuccess, SignOutFail,
SignupSuccess, SignupFail} from './user.actions';

function* getSnapshotFromUserAuth(userAuth, additionalData){

    try{
        const userRef = yield call(CreateUserProfile, userAuth, additionalData);
        const userSnapshot = yield userRef.get();

        yield put(SignInSuccess({
            id:userSnapshot.id,
             ...userSnapshot.data()
        }));
    }
    catch(error){
        yield put(SignInFail(error));
    }
}

export function* signinWithGoogle(){

    try{
        const {user} = yield Auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    }
    catch(error){
        yield put(SignInFail(error));
    }
    
}

export function* googleSigninStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,
         signinWithGoogle);
}

export function* signinWithEmail({payload:{email, password}}){
    
    try{
        const {user} = yield Auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    }
    catch(error){
        yield put(SignInFail(error));
    }
}

export function* emailSigninStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,
         signinWithEmail);
}

export function* onCheckUserSession(){
    
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    }
    catch(error){
        yield put(SignInFail(console.error));
    }
}

export function* checkUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, onCheckUserSession);
}

export function* onSignout(){
    
    try {
        yield Auth.signOut();
        yield put(SignOutSuccess());

    } catch (error) {
        yield put(SignOutFail(error));
    }
}

export function* userSignoutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, onSignout);
}

export function* signup({payload:{displayName, email, password}}){
    
    try {

        const {user} = yield Auth.createUserWithEmailAndPassword(email, password);
        yield put(SignupSuccess({user, additionalData:displayName}));
        
    } catch (error) {
        yield put(SignupFail(error));
    }
}
export function* userSignupStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signup);
}

export function* signupSuccess({payload:{user, additionalData}}){

    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* userSignupSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signupSuccess);
}

export function* userSaga(){
    yield all([
        call(googleSigninStart), 
        call(emailSigninStart), 
        call(checkUserSession),
        call(userSignoutStart),
        call(userSignupStart),
        call(userSignupSuccess)
    ]);
}