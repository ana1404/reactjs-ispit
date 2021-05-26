import './App.css';
import React, {useState, useEffect} from 'react'
import Results from './components/Results';
import Search from './components/Search';
import Fetch from './services/Fetch.js';
import FetchRepo from './services/FetchRepo.js';
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {

  const [name, setName] = useState("");
  const [json, setJson] = useState("");
  const [repo, setRepo] = useState("");

  useEffect(() => {
    if (name !== "") {
      Fetch(name).then(json => setJson(json));
      FetchRepo(name).then(repo => setRepo(repo));
    }
      
  }, [name])

  /* if(json !== undefined)
    console.log(json.name) */

  if (name === "")
    return (
      <Container className="col-md-6" style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Search setName={setName} />
      </Container>
    )
  else
  return (
    <Container className="col-md-6" style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Results json={json} repo={repo}/>
    </Container>
  )
    
  //console.log(repo)
  /* return (
    <Container className="col-md-6">
      <Switch>
        <Route exact path="/">
          <Search setName={setName} setRepo={setRepo} />
         </Route>
        <Route path="/results">
          <Results json={json} repo={repo}/>
         </Route>
      </Switch>
    </Container>
  ); */
}

App.propTypes = {
  name: PropTypes.string,
  json: PropTypes.object,
  repo: PropTypes.array
}

export default App;
