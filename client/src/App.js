import React, { useEffect, useState } from "react";
import "./App.css";
import GetData from "./component/GetData";
import Person from "./component/Person";

function App() {
  return (
    <div className="App">
      <h1>Timer</h1>
      <Person />
      <hr />
      <h2>Toplist</h2>
      <GetData />
    </div>
  );
}

export default App;
