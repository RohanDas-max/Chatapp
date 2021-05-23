import React from "react";
import firebase from "firebase";

import "firebase/auth";


export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log("successfully signed In");
      })
      .catch((error) => {
        console.log("No user is Signed In");
      });
  };

  return (
    
      <div>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    
  );
}
