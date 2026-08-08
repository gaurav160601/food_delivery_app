const fs = require('fs');
const path = require('path');
const readJson = require('../utils/readJson');
const { RESTAURANTS_FILE, DETAILS_DIR } = require('../utils/paths');

const SEARCH_FIELDS = ['name', 'cuisines', 'areaName', 'city', 'locality'];

function extractRestaurantInfo(detailJson) {
  const cards = detailJson && detailJson.data && detailJson.data.cards;
  if (!Array.isArray(cards)) return null;

  const restaurantCard = cards.find(
    (card) => card.card && card.card.card && card.card.card.info
  );
  return restaurantCard ? restaurantCard.card.card.info : null;
}

function extractListRestaurants(listJson) {
  const cards = listJson && listJson.data && listJson.data.cards;
  if (!Array.isArray(cards)) return [];

  const restaurants = [];
  for (const card of cards) {
    const grid = card.card && card.card.card && card.card.card.gridElements;
    const list = grid && grid.infoWithStyle && grid.infoWithStyle.restaurants;
    if (!Array.isArray(list)) continue;
    for (const entry of list) {
      if (entry && entry.info) {
        restaurants.push(entry.info);
      }
    }
  }
  return restaurants;
}

function collectDetailRestaurants() {
  const files = fs.readdirSync(DETAILS_DIR).filter((f) => f.endsWith('.json'));
  const restaurants = [];

  for (const file of files) {
    const id = path.basename(file, '.json');
    const detail = readJson(path.join(DETAILS_DIR, file));
    const info = extractRestaurantInfo(detail);
    if (info && info.id === id) {
      restaurants.push(info);
    }
  }

  return restaurants;
}

function collectAllRestaurants() {
  const listJson = readJson(RESTAURANTS_FILE);
  const list = extractListRestaurants(listJson);
  const details = collectDetailRestaurants();

  const merged = new Map();
  for (const info of [...details, ...list]) {
    if (info && info.id && !merged.has(info.id)) {
      merged.set(info.id, info);
    }
  }
  return Array.from(merged.values());
}

function toSearchableValue(info, field) {
  if (field === 'cuisines') {
    return Array.isArray(info[field]) ? info[field].join(' ') : '';
  }
  return typeof info[field] === 'string' ? info[field] : '';
}

function searchRestaurants(query) {
  const q = (query || '').trim().toLowerCase();
  if (!q) {
    return { restaurants: [], count: 0 };
  }

  const restaurants = collectAllRestaurants();
  const matches = restaurants.filter((info) =>
    SEARCH_FIELDS.some((field) =>
      toSearchableValue(info, field).toLowerCase().includes(q)
    )
  );

  return { restaurants: matches, count: matches.length };
}

module.exports = {
  searchRestaurants,
  extractRestaurantInfo,
};
