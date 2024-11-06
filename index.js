// Importing required libraries
const cron = require("node-cron");
const express = require("express");
const axios = require("axios");

// Define the API endpoint
const url = "https://inverso-backend.onrender.com/api/items?populate=*&pagination[pageSize]=5";

// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await axios.get(url);
    console.log("Data fetched at", new Date());
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

app = express(); // Initializing app

// Creating a cron job which runs on every 15 minutes
cron.schedule("*/1 * * * *", function () {
  console.log("Running a task every 15 minutes");
  fetchData();
});

app.listen(3000);
