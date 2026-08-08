require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`Swiggy mock API running at ${BASE_URL}`);
  console.log(`Endpoints: /api/health, /api/restaurants, /api/restaurants/:id, /api/search?q=, /api/categories, /api/offers`);
});
