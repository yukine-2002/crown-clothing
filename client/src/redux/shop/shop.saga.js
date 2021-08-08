import { call,put, takeEvery } from "@redux-saga/core/effects";

import ShopActionTypes from "./shop.types";

import { firestore,convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import {
    fetchCollectionsSuccess,
    fetchCollectionsError

} from './shop.actions'
import { all } from "redux-saga/effects";
export function* fectchCollectionsAsync(){
   yield console.log('i am fired');
    try{
        const collectionRef = firestore.collection('collections');
        
        const snapshot = yield collectionRef.get();

        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);

        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionsError(error))
    }

}

export function* fetchCollectionsStart(){
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fectchCollectionsAsync)
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}