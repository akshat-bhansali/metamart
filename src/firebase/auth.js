import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import firebase_app from "./firebaseApp";

const auth = getAuth();
const firebase = firebase_app
export const signUpWithEmail = (email,password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    // ..
  });
}

export const loginWithEmail = (email,password) =>
{
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
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
    await auth.signInWithPopup(googleAuthProvider);
    console.log('User signed in with Google!');
  } catch (error) {
    console.error('Error signing in with Google:', error.message);
  }
};

