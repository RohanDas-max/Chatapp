import React from "react";
import firebase from "firebase";

import {Button} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"




export default function SignOut() {

  

  const signout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Signed Out");
      })
      .catch((error) => {
        console.log("Error occured during sign out");
      });
  };

  return (
    <div>
      <Button className="btn btn-danger" onClick={signout}>Signout</Button>
    </div>
  );
}
