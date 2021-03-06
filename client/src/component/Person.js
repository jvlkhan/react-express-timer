import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PersonProps from "./PersonProps";

const Person = () => {
  const [person, setPerson] = useState([]);
  const [name, setName] = useState("");
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);

  let slicedTime;

  //function startTimer(timer) {
  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      //timer = time;
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  //}

  const addPerson = (p) => {
    p.preventDefault();

    const newPerson = {
      name: name,
      time: time,
      id: uuidv4(),
    };

    if (time !== 0 && name.length >= 1) {
      setPerson((prev) => [newPerson, ...prev]);
      postPerson(newPerson);
    }
  };

  // TODO: fixa rätt body till backend, fel response i clg
  const postPerson = (person) => {
    const initConfig = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(person),
    };

    fetch("/backend", initConfig)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };

  const removePerson = (id) => {
    console.log(id);
    const filteredList = person.filter((post) => post.id !== id);
    setPerson(filteredList);
  };

  function endTime() {
    setTimeOn(false);
    setTime(0);
    //sliceTime();
  }

  return (
    <div>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <button onClick={() => setTimeOn(true)}>Start</button>
      <button onClick={() => setTimeOn(false)}>Stop</button>
      <button onClick={() => setTimeOn(true)}>Resume</button>
      <button onClick={() => setTime(0)}>Reset</button>
      <button onClick={endTime}>End</button>
      <hr />
      <form onSubmit={addPerson}>
        <input
          onChange={(p) => setName(p.target.value)}
          type="text"
          placeholder="name"
        ></input>
        <input type="submit" value="Add person"></input>
      </form>
      {person.map((post) => (
        <PersonProps
          name={post.name}
          time={post.time}
          id={post.id}
          handleClick={removePerson}
        />
      ))}
    </div>
  );
};

export default Person;
