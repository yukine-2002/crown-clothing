import {takeLatest,put,call,all} from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { provider,auth,createUserProfileDocument ,getCurrentUSer } from '../../firebase/firebase.utils';

import { SignInFailure,SignInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from './user.actions';


export function* getSnapshotFromUserAuth(userAuth,additionalData){
    try{


        const userRef = yield call(createUserProfileDocument,userAuth,additionalData);

        const userSnapshot = yield userRef.get();

        yield put(
            SignInSuccess({id:userSnapshot,...userSnapshot.data()})
        )

    }catch(error){
        yield put(SignInFailure(error))
    }
}

export function* signInWithGoogle () {
    try{
        const {user} = yield auth.signInWithPopup(provider);

        yield getSnapshotFromUserAuth(user)

    }catch(error){
        yield put(SignInFailure(error))
    }
}


export function* signInWithEmail({payload : {email,password}}){

    try{

        const {user} = yield auth.signInWithEmailAndPassword(email,password); 

        yield getSnapshotFromUserAuth(user)

    }catch(error){
        yield put(SignInFailure(error))
    }

}

export function* isUserAuthenticated(){
    try{

        const userAuth = yield getCurrentUSer();

        if(!userAuth)
        return;

        yield getSnapshotFromUserAuth(userAuth)

    }catch(error){
        yield put(SignInFailure(error))

    }
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    }catch(error){
        yield put(signOutFailure(error))
    }
}

export function* SignUp({payload :{email,password,displayName}}){
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email,password );

          yield put(signUpSuccess({user,additionalData:{displayName}}));
    }catch(error){
        yield put(signUpFailure(error));
    }
}

export function* SignInAfterSignUp ({payload:{user,additionalData}}){
    yield getSnapshotFromUserAuth(user,additionalData);
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail);
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* onSignOutStart (){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START,SignUp);
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,SignInAfterSignUp)
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(isUserAuthenticated),call(onSignOutStart),call(onSignUpStart),call(onSignUpSuccess)])
}

