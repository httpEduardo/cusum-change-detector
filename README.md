# Cusum Change Detector

![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white)

Cusum Change Detector detects change points in time-series using a CUSUM detector with drift and threshold controls.

## Quick start

```bash
python -m cusum_change_detector.server --port 5173
```

Open http://localhost:5173

## API

- POST `/api/analyze` `{ "threshold": 5, "drift": 0.5 }`
- POST `/api/seed`

