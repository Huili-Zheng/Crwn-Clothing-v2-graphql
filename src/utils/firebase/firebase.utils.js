import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDi92B5j-Hhj5M4wD-JWhIRgo_hOyoPsSI",
    authDomain: "crwn-clothing-db-1bcab.firebaseapp.com",
    projectId: "crwn-clothing-db-1bcab",
    storageBucket: "crwn-clothing-db-1bcab.appspot.com",
    messagingSenderId: "402116242443",
    appId: "1:402116242443:web:724b5afb2de58e81f56b0e"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('erroe creating the user', error.message);
        }
    }
    return userDocRef;
}