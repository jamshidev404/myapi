const express = require("express");
const Step = require("../controllers/step");

const router = express.Router();

router.post("/add", Step.createStep);
router.get("/:name", Step.getStep);

module.exports = router;
