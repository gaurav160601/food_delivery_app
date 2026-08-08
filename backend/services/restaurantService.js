const path = require('path');
const readJson = require('../utils/readJson');
const ApiError = require('../utils/ApiError');
const { RESTAURANTS_FILE, DETAILS_DIR } = require('../utils/paths');

const ID_EXT = '.json';

function getRestaurantList() {
  return readJson(RESTAURANTS_FILE);
}

function getRestaurantById(id) {
  if (!id || typeof id !== 'string' || !/^[A-Za-z0-9-]+$/.test(id)) {
    throw new ApiError(400, 'Invalid restaurant id');
  }
  const filePath = path.join(DETAILS_DIR, `${id}${ID_EXT}`);
  return readJson(filePath);
}

module.exports = {
  getRestaurantList,
  getRestaurantById,
};
