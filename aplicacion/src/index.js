import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";

var firebaseConfig = {
  apiKey: "AIzaSyAddyiIbjDGSF63PmceHpnuYWrOOq6HSuA",
  authDomain: "proyecto-agenda-7296d.firebaseapp.com",
  projectId: "proyecto-agenda-7296d",
  storageBucket: "proyecto-agenda-7296d.appspot.com",
  messagingSenderId: "1047540203387",
  appId: "1:1047540203387:web:55d65fcf95dad2a69187de",
};
ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById("root")
);
