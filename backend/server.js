// load .env data into process.env
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Server running'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});