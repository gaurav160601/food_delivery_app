const asyncHandler = require('../utils/asyncHandler');
const restaurantService = require('../services/restaurantService');

const getRestaurants = asyncHandler(async (req, res) => {
  const data = restaurantService.getRestaurantList();
  res.json(data);
});

const getRestaurantById = asyncHandler(async (req, res) => {
  const data = restaurantService.getRestaurantById(req.params.restaurantId);
  res.json(data);
});

module.exports = {
  getRestaurants,
  getRestaurantById,
};
