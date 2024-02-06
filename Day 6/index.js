const express = require("express");
const app = express();
const port = 8080;

function greetHandler(req, res) {
  const name = req.query.name;
  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    res.send("Hello, Guest!");
  }
}

app.get("/greet", greetHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
