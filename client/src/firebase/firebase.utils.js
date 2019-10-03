import firebase, { firestore, auth } from 'firebase/app';
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

  export const AddCollectionToDocument = async (collectionKey, collectionToAdded)=>{

    const collectionRef = Firestore.collection(collectionKey);
    
    const batch = Firestore.batch();

    collectionToAdded.forEach(obj => {
        const collectionDoc = collectionRef.doc();
        batch.set(collectionDoc, obj);
    });

    return await batch.commit();
  }

  export const TransformCollectionsToMap = (collections)=>{

    const transformedCollections = collections.docs.map((doc)=>{

        const {title, items} = doc.data();

        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollections.reduce((acc, collection)=>{

        acc[collection.title.toLowerCase()] = collection;
        return acc;

    }, {});

  }

  export const getCurrentUser = ()=>{
      return new Promise((resolve, reject)=>{

        const unsubscribe = Auth.onAuthStateChanged(userAuth=>{
            unsubscribe();
            resolve(userAuth);
        }, reject)
      });
  }

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt:'select_account'});
  export const SigninWithGoogle = ()=>Auth.signInWithPopup(googleProvider);

  export default firebase;