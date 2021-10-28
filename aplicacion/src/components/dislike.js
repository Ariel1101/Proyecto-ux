import React, { Component } from "react";
import swal from "sweetalert";

export default class dislike extends Component {
  render() {
    const mostrar = () => {
      swal({
        title: "Reseña del apunte: ",
        text: "No te ha gustado este apunte",
        icon: "error",
        button: "Aceptar"
      });
    };
    return (
      <button class="btn btn-danger btn-sm" type="button" onClick={()=>mostrar()}>
        No me gusta
      </button>
    );
  }
}
