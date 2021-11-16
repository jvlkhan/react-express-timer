import React, { useEffect, useState } from "react";
import "./App.css";
import Person from "./component/Person";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/backend")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Timer</h1>
      <Person />
      <hr />
      <h2>Toplist</h2>
      <div>
        {typeof backendData.grupp === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.grupp.map((grupp, i) => <p key={i}>{grupp}</p>)
        )}
      </div>
    </div>
  );
}

export default App;
