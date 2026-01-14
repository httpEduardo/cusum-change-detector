# SignalScout

SignalScout detects change points in time-series using a CUSUM detector with drift and threshold controls.

## Quick start

```bash
python -m app.server --port 5173
```

Open http://localhost:5173

## API

- POST `/api/analyze` `{ "threshold": 5, "drift": 0.5 }`
- POST `/api/seed`

