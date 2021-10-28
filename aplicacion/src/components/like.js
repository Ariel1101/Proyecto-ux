import React, { Component } from "react";
import swal from "sweetalert";

export default class like extends Component {
  render() {
    const mostrar = () => {
      swal({
        title: "Reseña del apunte: ",
        text: "¡Te ha gusta este apunte!",
        icon: "success",
        button: "Aceptar"
      });
    };
    return (
      <button class="btn btn-primary btn-sm" type="button" onClick={()=>mostrar()}>
        Me gusta
      </button>
    );
  }
}
