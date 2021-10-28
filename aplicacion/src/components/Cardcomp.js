import React, { Component } from "react";

export default class Cardcomp extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: "",
      description: "",
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="conteiner d-flex justify-content-center">
        <div class=" row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Bienvenido nuevo usuario</h5>
                <br />
                <p class="card-text">
                  Hemos diseñado esta aplicacion porque entendemos la difícil
                  tarea de recordar hacer algunas cosas pero puedes empezar
                  agregando nuevos apuntes para que esa situación empiece a
                  cambiar.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Agregar nuevo apunte</h5>
                <form onSubmit={this.handleSubmit}>
                  <br />
                  <div>
                    <input
                      type="text"
                      name="title"
                      className="autocomplete"
                      value={this.state.title}
                      onChange={this.handleInputChange}
                      placeholder="Título"
                    />
                  </div>
                  <div>
                    <br />
                    <input
                      type="text"
                      name="description"
                      className="autocomplete"
                      value={this.state.description}
                      onChange={this.handleInputChange}
                      placeholder="Descripción"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-dark">
                    Guardar Apunte
                  </button>
                </form>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}