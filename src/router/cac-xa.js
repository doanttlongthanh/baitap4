const express = require("express");
const router = express.Router();
const xaController = require("../app/controllers/cac-xaController");

// newsController.index;

router.get("/create", xaController.create);
router.post("/store", xaController.store);
router.get("/:id/Edit", xaController.edit);
router.put("/:id", xaController.update);
router.delete("/:id", xaController.delete);

router.get("/:slug", xaController.show);

module.exports = router;
