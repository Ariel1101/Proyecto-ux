import React, { Component } from "react";
import Cardcomp from "./Cardcomp.js";
import { apuntes } from "../usuario.json";
import Like from './like';
import Dislike from './dislike.js';

export default class Listcomp extends Component {
  constructor() {
    super();
    this.state = {
      apuntes,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(apuntes) {
    var datosJson = JSON.stringify(this.state.apuntes);
    localStorage.setItem("datosJson ", datosJson);
    this.setState({
      apuntes: [...this.state.apuntes, apuntes],
    });
  }

  render() {
    const apuntes = this.state.apuntes.map((apuntes, i) => {
      return (
        <div class="card" key={i}>
          <div class="card-body">
            <div class="card-content">
              <span class="card-title">
                <h5>{apuntes.title}</h5>
              </span>
              <div class="card-action">{apuntes.description}</div>
              <div class="d-grid gap-2 col-6 mx-auto">
                <br />
                <Like/>
                <Dislike/>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className={this.props.col}>
        <Cardcomp onAddTodo={this.handleAddTodo}></Cardcomp>
        <br />
        <div className="conteiner d-flex justify-content-center">
          <div className="row">
            <div className="card">
              <span class="card-title">Apuntes creados</span>
              {apuntes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
