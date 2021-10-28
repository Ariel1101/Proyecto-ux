import React from "react";
import Navcomp from "../components/Navcomp.js";
import Listcomp from "../components/Listcomp.js";
import { Redirect } from "react-router-dom";

export default function Dashboard({ authorized }) {
  if (!authorized) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <Navcomp />
        <br />
        <>
          <h1 className="App-tittle">
            ¿Estás listo para organizar tus tareas?
          </h1>
        </>
        <br />
        <div>
          <Listcomp />
        </div>
      </div>
    );
  }
}
