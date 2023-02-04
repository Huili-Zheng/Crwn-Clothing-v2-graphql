import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  useEffect(() => {
    const asyncFn = async () => {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
      console.log(response);
    };
    asyncFn();
  }, []);

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
