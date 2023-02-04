import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    useEffect(() => {
        const asyncFn = async () => {
            const response = await getRedirectResult(auth);

            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
            console.log(response);
        }
        asyncFn();
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect();
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in</button>
            <button onClick={logGoogleRedirectUser}>Sign in Redirect</button>
            <SignUpForm />

        </div>
    )
}

export default SignIn