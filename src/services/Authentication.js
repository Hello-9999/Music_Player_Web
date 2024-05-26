import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

export const Signup_Auth = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (response) {
      const sendEmailverify = await sendEmailVerification(auth.currentUser);
      console.log("We have send a email for your verification ");
    }
    return response;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.error(errorCode.replace("auth/", ""), "error_Code");
    console.log(errorMessage, "error msg");
  }
};

export const Signin_Auth = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    // console.log(response);
    if (response) {
      // console.log('first')

      console.log(auth.currentUser, "Token");
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, "eroor");
  }
};
