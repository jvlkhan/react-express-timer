import React, { useState, useEffect } from "react";

const GetData = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/backend")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      <div>
        {typeof backendData.grupp === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.grupp.map((grupp, i) => <p key={i}>{grupp}</p>)
        )}
      </div>
    </div>
  );
};

export default GetData;
