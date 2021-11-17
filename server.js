const { response } = require("express");
const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.json({extended: false}))

const users = [
  {
    name: "name",
    time: "time",
    id: 11,
  },
];

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
/********************************** Get *********************************** */
app.get("/backend", (req, res) => {
  console.log("User name");
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(users));
});

/*******************************  Post ************************************** */

app.post('/backend', (req, res) =>{
  const user = req.body;
  users.push(user)
 res.status(201).send("Created")

})

// TODO: fixa post, fel response i clg
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
