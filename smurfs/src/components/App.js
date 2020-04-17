import React, { useState, useEffect } from "react";
import "./App.css";

import { SmurfContext } from "../contexts/SmurfContext";
import axios from "axios";
import Form from "./Form";
import Smurfs from './SmurfList';


function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurfs(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfs }}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        <Smurfs />
      </SmurfContext.Provider>
    </div>
  );
}

export default App;