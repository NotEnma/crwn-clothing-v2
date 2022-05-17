import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth';
import {    
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDnuYH3RCXHogndTHuHgqEivyMQpnhMzIE",
    authDomain: "crwn-clothing-b3614.firebaseapp.com",
    projectId: "crwn-clothing-b3614",
    storageBucket: "crwn-clothing-b3614.appspot.com",
    messagingSenderId: "158018412388",
    appId: "1:158018412388:web:5c0a8217bfdce339196471",
    measurementId: "G-EHFGPF77SV"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (erroe) {
            console.log('error creating the user', erroe.message);
        }

        return userDocRef;
    }

    // if user data does not exists

    // create / set the document with the data from userAuth in my collection

    // if user data exists

    // return userDocRef
}