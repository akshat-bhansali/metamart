import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import firebase_app from "./firebaseApp";

const auth = getAuth();
const firebase = firebase_app;
const googleAuthProvider = new GoogleAuthProvider();

export const signUpWithEmail = (email,password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    return true;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    return false;
    // ..
  });
}

export const loginWithEmail = (email,password) =>
{
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      return true;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
      return false;
    });
}

export const signOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error);
  });
}


// Google Sign-In
export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth,googleAuthProvider);
    console.log('User signed in with Google!');
    return true;
  } catch (error) {
    console.error('Error signing in with Google:', error.message);
    return false;
  }

};

