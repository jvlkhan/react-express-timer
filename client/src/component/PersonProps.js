import React from "react";

const PersonProps = (props) => {
  const { name, time, id, handleClick } = props;

  return (
    <div>
      <hr />
      <h3>{name}</h3>
      <p>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </p>
      <button onClick={() => handleClick(id)}>Remove</button>
      <hr />
    </div>
  );
};

export default PersonProps;
