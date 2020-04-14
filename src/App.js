import React, {useEffect} from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import './App.css';

const App = () => {

  useEffect(() => {
    // initializes Materialize's javascript
    M.AutoInit();
  })
  return <div className="App"> Mloaskoakso </div>
}

export default App;
