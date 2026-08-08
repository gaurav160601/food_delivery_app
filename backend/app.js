const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const restaurantRoutes = require('./routes/restaurantRoutes');
const searchRoutes = require('./routes/searchRoutes');
const constantsRoutes = require('./routes/constantsRoutes');
const healthRoutes = require('./routes/healthRoutes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/health', healthRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/search', searchRoutes);
app.use('/api', constantsRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
