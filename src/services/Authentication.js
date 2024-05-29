import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";
import { customErrorToaster, customInfoToaster, errorToast } from "./Toast";

export const Signup_Auth = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const sendEmailverify = await sendEmailVerification(auth.currentUser);
    const title = "Email Verification Needed";
    const desc =
      "We've sent a verification email to your inbox. Please check your email and follow the instructions to complete your verification. If you don't see it, remember to check your spam folder.";
    setTimeout(() => {
      if (response) {
        customInfoToaster(title, desc);
      }
    }, 3000);

    return response;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    setTimeout(() => {
      errorToast(errorCode.replace("auth/", ""));
    }, 3000);
  }
};

export const Signin_Auth = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    setTimeout(() => {
      errorToast(errorMessage);
    }, 3000);
  }
};

export const Google_btn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const response = await signInWithPopup(auth, provider);
    return response;
  } catch (error) {
    console.log(error);
  }
};
