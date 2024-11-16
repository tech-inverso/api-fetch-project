const axios = require("axios");

// Define the API endpoint
const url =
  "https://inverso-backend.onrender.com/api/items?populate=*&pagination[pageSize]=5";

// Function to fetch data from the API
const fetchData = async () => {
  try {
    const response = await axios.get(url);
    console.log("Data fetched at", new Date());
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

module.exports = {fetchData}