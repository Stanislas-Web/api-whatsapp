const express = require("express");
const apiRoute = require("./routes/routes");
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://stanislasmakengo1:0826016607makengo@cluster0.xbbf3m1.mongodb.net/?retryWrites=true&w=majority"
,
  { useNewUrlParser: true,
    })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Express server démarré sur le port ' + port);
});

app.use(express.json());

app.use("/whatsapp", apiRoute);

app.listen(PORT, () => {console.log("port: " + PORT)});