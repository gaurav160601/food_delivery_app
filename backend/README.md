# Swiggy Clone - Mock Backend

Production-style Node.js + Express mock backend that serves the original Swiggy API JSON responses exactly as they are. The React frontend consumes these REST endpoints only via `fetch()` — it never imports JSON files directly.

## Setup

```bash
cd backend
npm install
npm run dev        # starts on PORT from .env (default 5000)
```

## Environment (.env)

```
PORT=5000
BASE_URL=http://localhost:5000
```

## Endpoints

| Method | URL                                   | Description                                                        |
|--------|---------------------------------------|--------------------------------------------------------------------|
| GET    | `/api/health`                         | Health check → `{ "success": true }`                               |
| GET    | `/api/restaurants`                    | Full Swiggy home page JSON (exact original response)               |
| GET    | `/api/restaurants/:restaurantId`      | Full restaurant detail + menu JSON for one restaurant              |
| GET    | `/api/search?q=pizza`                 | Case-insensitive search on name, cuisine, area, city               |
| GET    | `/api/categories`                     | "What's on your mind?" category grid                               |
| GET    | `/api/offers`                         | Aggregated offers from all restaurant detail files                 |

## Data

- `data/restaurants.json` — the home page response returned by `/api/restaurants`.
- `data/restaurant-details/<restaurantId>.json` — one file per restaurant, served by `/api/restaurants/:restaurantId`.

Detail files are original Swiggy API responses, served byte-for-byte via `res.json()` with zero transformation.

## Examples

```bash
# Home page
curl http://localhost:5000/api/restaurants

# Restaurant detail (menu)
curl http://localhost:5000/api/restaurants/672075

# Search
curl "http://localhost:5000/api/search?q=biryani"

# Categories & offers
curl http://localhost:5000/api/categories
curl http://localhost:5000/api/offers

# Errors
curl http://localhost:5000/api/restaurants/999999   # 404
```

## Architecture

```
backend/
├── controllers/    # request/response handling
├── middleware/     # notFound, errorHandler
├── routes/         # express routers
├── services/       # data access + business logic
├── utils/          # readJson, asyncHandler, ApiError, paths
├── data/           # original Swiggy JSON responses
├── app.js          # express app wiring
└── server.js       # entry point
```
