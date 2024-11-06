const express = require('express');
const axios = require("axios");

const cronRouter = express.Router();

// Define the API endpoint
const url =
  "https://inverso-backend.onrender.com/api/items?populate=*&pagination[pageSize]=5";

// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await axios.get(url);
    console.log("Data fetched at", new Date());
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const getCron = async (req, res) => {
  try {
    fetchData();
    return res.status(200).json("OK!");
  } catch (error) {
    return res.status(500).json(error);
  }
};


cronRouter.get("/", getCron)

module.exports = {cronRouter}