require("dotenv").config();

const envconfig = require("./src/config/env.config");
const database = require("./src/config/db.config");
const mainRouter = require("./src/routes/main.router");
const { errorHandler } = require("./src/middlewares/error.middleware");
//importando
const express = require("express");
const debug = require("debug")("students-api:server");
const morgan = require("morgan");
const cors = require("cors");

//instancias
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use("/api/v1", mainRouter);
app.use(errorHandler);

const port = envconfig.PORT;

app.listen(port, () => {
  debug(`Server is running on port ${port}`);
});

//conectando a la base de dates
database.connect();
