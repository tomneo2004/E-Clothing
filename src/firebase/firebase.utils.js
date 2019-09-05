import firebase, { firestore } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
    projectId: process.env.REACT_APP_FB_PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.REACT_APP_FB_MSG_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID
  };
 
  firebase.initializeApp(firebaseConfig);

  export const Auth = firebase.auth();
  export const Firestore = firebase.firestore();

  export const CreateUserProfile = async (userAuth, additionalData)=>{

    if(!userAuth)
        return;
    
    const userRef = Firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){

        const{email, displayName} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                email,
                displayName,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            
            console.log('create user profile error '+error);
        }
    }

    return userRef;
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const SigninWithGoogle = ()=>Auth.signInWithPopup(provider);

  export default firebase;