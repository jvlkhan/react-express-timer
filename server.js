const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/backend", (req, res) => {
  res.json({ grupp: ["Grupp 3", "Deni", "Denisé", "Michelle", "Nick"] });
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
