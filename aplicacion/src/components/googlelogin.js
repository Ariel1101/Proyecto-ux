import React, { Component } from "react";
import firebase from "firebase";

export default class googlelogin extends Component {
  onsubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
          console.log(error);
      });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.onsubmit}>
          Sign in with google
        </button>
      </div>
    );
  }
}
