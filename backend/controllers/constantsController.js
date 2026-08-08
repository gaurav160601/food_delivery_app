const asyncHandler = require('../utils/asyncHandler');
const { getCategories, getAllOffers } = require('../services/constantsService');

const getCategoriesHandler = asyncHandler(async (req, res) => {
  const categories = getCategories();
  res.json({ success: true, count: categories.length, categories });
});

const getOffers = asyncHandler(async (req, res) => {
  const offers = getAllOffers();
  res.json({ success: true, count: offers.length, offers });
});

module.exports = {
  getCategories: getCategoriesHandler,
  getOffers,
};
