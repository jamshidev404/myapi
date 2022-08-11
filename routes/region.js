const express = require('express');
const Region = require('../controllers/region');

const router = express.Router();

router.post('/add', Region.createRegion);
router.get('/getall', Region.getAllRegions)
router.get('/getOne/:id', Region.getOne)

module.exports = router;