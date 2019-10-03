import ShopActionTypes from './shop.types';
import {Firestore, TransformCollectionsToMap} from '../../firebase/firebase.utils.js';


export const fetchCollectionsStart = ()=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionMap)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionMap
});

export const fetchCollectionsFail = (errorMsg)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAIL,
    payload:errorMsg
})

export const fetchCollectionsStartAsync = ()=>{

    return (dispatch)=>{
        
        const collectionRef = Firestore.collection('collections');

        dispatch(fetchCollectionsStart());
    
        collectionRef.get()
        .then((snapshot)=>{
    
                const transformedCollections = TransformCollectionsToMap(snapshot);
    
                dispatch(fetchCollectionsSuccess(transformedCollections));
    
        })
        .catch(error=>{
            dispatch(fetchCollectionsFail(error.message));
        });
    }
}

