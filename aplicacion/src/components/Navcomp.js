import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";


export default class Navbcomp extends Component {
  render() {

    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>Organizador de apuntes</Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Ingrese apunte"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar apunte</Button>
            </Form>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              <button  href="#login" >Salir de la sesión</button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}