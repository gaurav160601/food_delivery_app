const fs = require('fs');
const path = require('path');
const readJson = require('../utils/readJson');
const { RESTAURANTS_FILE, DETAILS_DIR } = require('../utils/paths');
const { extractRestaurantInfo } = require('./searchService');

function getCategories() {
  const list = readJson(RESTAURANTS_FILE);
  const cards = list && list.data && list.data.cards;
  if (!Array.isArray(cards)) return [];

  const grid = cards.find(
    (card) => card.card && card.card.card && card.card.card.id === 'whats_on_your_mind'
  );
  const info = grid && grid.card.card.gridElements && grid.card.card.gridElements.infoWithStyle;
  if (!info || !Array.isArray(info.info)) return [];

  return info.info.map((item) => ({
    id: item.id,
    title: item.action && item.action.text,
    imageId: item.imageId,
    link: item.action && item.action.link,
  }));
}

function getAllOffers() {
  const files = fs.readdirSync(DETAILS_DIR).filter((f) => f.endsWith('.json'));
  const offers = [];

  for (const file of files) {
    const id = path.basename(file, '.json');
    const detail = readJson(path.join(DETAILS_DIR, file));
    const info = extractRestaurantInfo(detail);
    if (!info) continue;

    const cards = detail.data && detail.data.cards;
    if (!Array.isArray(cards)) continue;

    const offerCard = cards.find(
      (card) =>
        card.card &&
        card.card.card &&
        card.card.card.id === 'offerCollectionWidget_UX4'
    );
    const offerList =
      offerCard &&
      offerCard.card.card.gridElements &&
      offerCard.card.card.gridElements.infoWithStyle &&
      offerCard.card.card.gridElements.infoWithStyle.offers;

    if (!Array.isArray(offerList)) continue;

    for (const offer of offerList) {
      offers.push({
        restaurantId: id,
        restaurantName: info.name,
        offer: offer.info,
      });
    }
  }

  return offers;
}

module.exports = {
  getCategories,
  getAllOffers,
};
