import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";

const Search = ({ setState }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        let input = document.getElementById("input").value;
        setState(input);
        /* if(true)
            return <Redirect to='/results'/> */
    };
    
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
        onClick={(event) => handleSubmit(event)}
        style={{ marginTop: "20px", width: "100%" }}
      >
        Pretraži
      </Button>
    </Form>
  );
};

export default Search;
