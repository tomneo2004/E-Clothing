import {all, call, takeLatest, put} from 'redux-saga/effects';

import UserActionTypes from '../user/user.action.type';
import {clearCart} from './cart.actions';

export function* clearCartOnSignout(){
    yield put(clearCart());
}

export function* onSignoutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout);
}

export function* cartSaga(){
    yield all([call(onSignoutSuccess)]);
}