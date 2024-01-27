const express = require("express");
const router = express.Router();
const meController = require("../app/controllers/MeController");

router.get("/store/baidang", meController.storebaidang);

module.exports = router;
