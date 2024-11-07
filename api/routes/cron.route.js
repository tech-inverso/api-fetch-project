const { getCron } = require("../controllers/cron.controller")

cronRouter.get("/", getCron)

module.exports = {cronRouter}