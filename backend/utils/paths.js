const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const RESTAURANTS_FILE = path.join(DATA_DIR, 'restaurants.json');
const DETAILS_DIR = path.join(DATA_DIR, 'restaurant-details');

module.exports = {
  ROOT_DIR,
  DATA_DIR,
  RESTAURANTS_FILE,
  DETAILS_DIR,
};
