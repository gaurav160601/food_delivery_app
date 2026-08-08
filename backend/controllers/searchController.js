const asyncHandler = require('../utils/asyncHandler');
const { searchRestaurants } = require('../services/searchService');

const search = asyncHandler(async (req, res) => {
  const { q } = req.query;
  const result = searchRestaurants(q);
  res.json({
    success: true,
    query: (q || '').trim(),
    count: result.count,
    restaurants: result.restaurants,
  });
});

module.exports = {
  search,
};
