const express = require("express");
const app = express();
const port = 3001;
const food_model = require("./food");
const pet_model = require("./pet");

app.use(express.json());

app.get("/pets", (req, res) => {
  pet_model
    .getPets()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/foods", (req, res) => {
  food_model
    .getFoods()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});



app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});