const express = require("express")
const LocationCtrl = require("../controllers/location-ctrl")
const router = express.Router()

router.get("/random", LocationCtrl.getRandom)

module.exports = router