const express = require("express");
const District = require("../controllers/district");

const router = express.Router();

router.post("/add", District.createDistrict);
router.get("/getall", District.getAllDistricts);
router.get("/getOne/:id", District.getOne);

module.exports = router;
