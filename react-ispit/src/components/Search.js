import React, { Component, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";

export default class Search extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let input = document.getElementById("input").value;
    this.props.setName(input);
    /* if(true)
        return <Redirect to='/results'/> */
  };


  render() {
    return (
      <Form>
        <Form.Label style={{ textAlign: "left" }}>
          Unesite ime Github korisnika:
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="npr.: antun-nakic"
          name="input"
          id="input"
        />
        <Button
          variant="primary"
          type="submit"
          onClick={(event) => this.handleSubmit(event)}
          style={{ marginTop: "20px", width: "100%" }}
        >
          Pretraži
        </Button>
      </Form>
    );
  }
}
