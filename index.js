const express = require("express");
const cors = require("cors");
const { cronRouter } = require("./api/controllers/cron.controller");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/cron", cronRouter);

app.listen(3000, () => console.log(`listening http://localhost:3000`));
