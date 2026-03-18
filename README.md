# ThinkBoard

A full-stack notes app built with the MERN stack. Create, edit, and delete notes with a clean, responsive UI and built-in rate limiting.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?style=flat&logo=express&logoColor=white)

---

## Features

- **Create, read, update, and delete notes** via a REST API
- **Rate limiting** with Upstash Redis (sliding window, 100 req/min)
- **Responsive grid layout** — works on mobile and desktop
- **Optimistic UI** — notes removed from the list instantly on delete
- **Toast notifications** for user feedback on all actions
- **Production-ready** — serves the React build statically from Express

---

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React 19, Vite, Tailwind CSS        |
| Backend   | Node.js, Express 4                  |
| Database  | MongoDB (Mongoose ODM)              |
| Rate Limiting | Upstash Redis (@upstash/ratelimit) |
| HTTP Client | Axios                             |
| Icons     | Lucide React                        |
| Toasts    | React Hot Toast                     |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (free tier works)
- An [Upstash](https://upstash.com) Redis database (free tier works) — required for rate limiting

### 1. Clone the repo

```bash
git clone https://github.com/your-username/thinkboard.git
cd thinkboard
```

### 2. Set up environment variables

Create a `.env` file inside the `backend/` directory:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/thinkboard
UPSTASH_REDIS_REST_URL=https://your-upstash-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-upstash-token
PORT=5001
NODE_ENV=development
```

> **Where to find these:**
> - `MONGO_URI` — MongoDB Atlas → your cluster → Connect → Drivers
> - `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` — Upstash console → your database → REST API

### 3. Install dependencies

```bash
# Install root, backend, and frontend deps
npm run install-all

# Or manually:
cd backend && npm install
cd ../frontend && npm install
```

### 4. Run in development

```bash
# From the root directory — starts both frontend and backend
npm run dev

# Or start them separately:
# Terminal 1 — backend (port 5001)
cd backend && npm run dev

# Terminal 2 — frontend (port 5173)
cd frontend && npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 5. Build for production

```bash
cd frontend && npm run build
cd ../backend && npm start
```

The Express server will serve the built React app from `frontend/dist` on port 5001.

---

## Project Structure

```
thinkboard/
├── backend/
│   └── src/
│       ├── config/
│       │   ├── db.js            # MongoDB connection
│       │   └── upstash.js       # Upstash Redis / rate limiter setup
│       ├── controllers/
│       │   └── noteController.js # CRUD logic
│       ├── middleware/
│       │   └── rateLimiter.js   # Rate limiting middleware
│       ├── models/
│       │   └── Note.js          # Mongoose schema
│       ├── routes/
│       │   └── noteRoutes.js    # API routes
│       └── server.js            # Express app entry point
│
├── frontend/
│   └── src/
│       ├── Components/
│       │   ├── Navbar.jsx
│       │   ├── NoteCard.jsx
│       │   ├── NotesNotFound.jsx
│       │   └── RateLimit.jsx
│       ├── Pages/
│       │   ├── HomePage.jsx
│       │   ├── CreatePage.jsx
│       │   └── NoteDetailPage.jsx
│       ├── lib/
│       │   ├── axios.js         # Axios instance with base URL
│       │   └── utils.js         # Date formatting helper
│       ├── App.jsx
│       └── main.jsx
│
└── package.json                 # Root scripts
```

---

## API Reference

Base URL: `/api/notes`

| Method | Endpoint   | Description         | Body                        |
|--------|------------|---------------------|-----------------------------|
| GET    | `/`        | Get all notes       | —                           |
| GET    | `/:id`     | Get a single note   | —                           |
| POST   | `/`        | Create a note       | `{ title, content }`        |
| PUT    | `/:id`     | Update a note       | `{ title, content }`        |
| DELETE | `/:id`     | Delete a note       | —                           |

All endpoints return JSON. Errors return `{ message: string }` with the appropriate HTTP status code.

---

## Deployment

This app is structured for easy deployment to platforms like **Render** or **Railway**.

1. Push your code to GitHub
2. Create a new Web Service pointing to the repo
3. Set the build command to `cd frontend && npm install && npm run build`
4. Set the start command to `cd backend && npm install && npm start`
5. Add your environment variables in the platform's dashboard

---

## Potential Improvements

- [ ] Search and filter notes on the home page
- [ ] User authentication (JWT or sessions)
- [ ] Markdown support in note content
- [ ] Note tags / categories
- [ ] Confirmation modal instead of `window.confirm()`
- [ ] Pagination or infinite scroll for large note collections
