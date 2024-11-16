const { fetchData } = require("../controllers/cron.controller");

const run = async () => {
  console.log("---------------------");
  console.log("Running api-fetch-project task");

  startTime = performance.now();

  await fetchData();

  endTime = performance.now();

  // Exit w/out errors
  process.exit(0);
};

module.exports = { run };
