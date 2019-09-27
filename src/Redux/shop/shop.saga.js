import {takeEvery, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {Firestore, TransformCollectionsToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess, fetchCollectionsFail} from './shop.actions';

export function* fetchCollectionAsync(){

    try{
        const collectionRef = Firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const transformedCollections = yield call(TransformCollectionsToMap, snapshot);
        yield put(fetchCollectionsSuccess(transformedCollections));
    }
    catch(error){
        yield put(fetchCollectionsFail(error.message));
    }
}

export function* fetchCollectionStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionAsync);
}

export function* shopSaga(){
    yield all([call(fetchCollectionStart)]);
}