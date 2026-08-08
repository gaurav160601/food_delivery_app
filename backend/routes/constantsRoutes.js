const express = require('express');
const { getCategories, getOffers } = require('../controllers/constantsController');

const router = express.Router();

router.get('/categories', getCategories);
router.get('/offers', getOffers);

module.exports = router;
