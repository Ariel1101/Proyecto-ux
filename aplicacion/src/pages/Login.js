import FirebaseUser from "../FirebaseUser";
import React, { useState } from "react";
import Googlelogin from "../components/googlelogin.js";

const Login = () => {
  const [signInOrUp, setSignInOrUp] = useState("");

  return (
    <section className="login">
      <div className="loginContainer">
        <label className="App-tittle">Inicio de Sesión</label>
        <div className="btnContainer">
          {signInOrUp ? (
            <FirebaseUser action={signInOrUp} />
          ) : (
            <>
              <button type="button" onClick={() => setSignInOrUp("signin")}>
                Ingresar
              </button>
              <button type="button" onClick={() => setSignInOrUp("signup")}>
                Crear nuevo usuario
              </button>
            </>
          )}
        </div>
        <Googlelogin/>
        <div></div>
      </div>
    </section>
  );
};
export default Login;
