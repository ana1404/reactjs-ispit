import './App.css';
import React, {useState, useEffect} from 'react'
import Results from './components/Results';
import Search from './components/Search';
import Fetch from './services/Fetch.js';
import FetchRepo from './services/FetchRepo.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {

  const [state, setState] = useState("");
  const [json, setJson] = useState("");
  const [repo, setRepo] = useState("");

  useEffect(() => {
    if (state !== "") {
      Fetch(state).then(json => setJson(json));
      FetchRepo(state).then(repo => setRepo(repo));
    }
      
  }, [state])

  /* if(json !== undefined)
    console.log(json.name) */

  if (state === "")
    return (
      <Container className="col-md-6">
        <Search setState={setState} setRepo={setRepo} />
      </Container>
    )
  else
  return (
    <Container className="col-md-6">
      <Results json={json} repo={repo}/>
    </Container>
  )
    
  //console.log(repo)
  /* return (
    <Container className="col-md-6">
      <Switch>
        <Route exact path="/">
          <Search setState={setState} setRepo={setRepo} />
         </Route>
        <Route path="/results">
          <Results json={json} repo={repo}/>
         </Route>
      </Switch>
    </Container>
  ); */
}

export default App;
