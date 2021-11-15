import React from "react";

const PersonProps = (props) => {
  const { name, time, id, handleClick } = props;

  return (
    <div>
      <hr />
      <h3>{name}</h3>
      <p>{time}</p>
      <button onClick={() => handleClick(id)}>Remove</button>
      <hr />
    </div>
  );
};

export default PersonProps;
