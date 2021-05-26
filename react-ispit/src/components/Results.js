import React from "react";
import { Figure, ListGroup, Button } from "react-bootstrap";

const ButtonReset = () => {
    window.location.href = "/";
}

const Results = ({ json, repo }) => {
  return (
    <>
      <Figure style={{display: "flex"}}>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={json.avatar_url}
        />
        <h1 style={{ display: "flex", alignItems: "center", padding: "20px" }}> {json.name}</h1>
      </Figure>

      <p>
        <strong>BIO: </strong>
        {json.bio}
      </p>
      <br />
      <p>
        <strong>LOCATION: </strong>
        {json.location}
      </p>
      <br />
      <p>
        <strong>REPOSITORIES: </strong>
      </p>
      <ListGroup>
        {repo !== undefined && repo !== ""
          ? repo.map((e, index) => {
              return <ListGroup.Item key={index}>{e.name}</ListGroup.Item>;
            })
          : console.log("bla bla")}
      </ListGroup>
      <Button
        variant="primary"
        onClick={ButtonReset}
        style={{ marginTop: "20px", width: "100%" }}
      >
        Reset
      </Button>
    </>
  );
};

export default Results;
