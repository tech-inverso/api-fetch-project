const express = require("express");
const cors = require("cors");
const { cronRouter } = require("./api/controllers/cron.controller");
const cron = require('node-cron');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(cors({
  origin: "*",
  credentials: true,
}));

app.use("/cron", cronRouter);

// Set up the cron job
cron.schedule('*/1 * * * *', () => {
  console.log('Running cron job');
  
  // Here, you should call the /cron endpoint
  const axios = require('axios');
  axios.get('http://localhost:3000/cron')
    .then(response => {
      console.log('Cron job completed successfully');
    })
    .catch(error => {
      console.error('Error running cron job:', error.message);
    });
});

app.listen(3000, () => console.log(`Server listening on port 3000`));
