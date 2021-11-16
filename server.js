const express = require("express");
const app = express();
const port = 5000;

const person = [
  {
    name: "name",
    time: "time",
    id: 11,
  },
];

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/backend", (req, res) => {
  res.json({ grupp: ["Grupp 3", "Deni", "Denisé", "Michelle", "Nick"] });
  person.push(person);
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
  res.send(person);
  res.json(person);
});

app.post("/backend", (req, res) => {
  const newperson = [
    {
      name: res.send,
      time: res.send,
      id: res.send,
    },
  ];
  res.send(newperson);
});
