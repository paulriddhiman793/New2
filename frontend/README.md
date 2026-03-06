# Frontend — AI Engineering Platform

## Start
```bash
cd frontend
npm install
npm run dev
```

## URLs
- **Frontend**: http://localhost:3000
- **Backend**:  http://localhost:5050

## API Endpoints
- `GET /health`  — backend + project status
- `GET /metrics` — model performance metrics
- `GET /files`   — project workspace file list
- `WS  /ws`      — real-time agent message stream

## Notes
- Vite proxy: all `/api`, `/health`, `/ws` calls are proxied to `localhost:5050`
- No CORS issues — proxy handles it
- Backend must be running: `python -m api.main`
