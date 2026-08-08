const fs = require('fs');
const ApiError = require('./ApiError');

const cache = new Map();

function readJson(filePath) {
  if (cache.has(filePath)) {
    return cache.get(filePath);
  }

  let raw;
  try {
    raw = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new ApiError(404, 'Restaurant not found');
    }
    throw new ApiError(500, `Failed to read data file: ${filePath}`);
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    throw new ApiError(500, `Malformed JSON in data file: ${filePath}`);
  }

  cache.set(filePath, data);
  return data;
}

module.exports = readJson;
