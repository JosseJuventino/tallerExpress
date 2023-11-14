
require("dotenv").config();

const envconfig = require("./src/config/env.config");
const database = require("./src/config/db.config");
const mainRouter = require("./src/routes/main.router");
//importando
const express = require("express");
const debug = require("debug")("students-api:server");
const morgan = require("morgan");
const cors = require("cors");

//instancias
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/v1", mainRouter);

const port = envconfig.PORT;

app.listen(port, () => {
  debug(`Server is running on port ${port}`);
});

