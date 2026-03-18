# ThinkBoard

A full-stack notes app for creating, editing, and deleting notes. Built with the MERN stack and rate limiting via Upstash Redis.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?style=flat&logo=express&logoColor=white)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS, DaisyUI |
| Backend | Node.js, Express 4 |
| Database | MongoDB (Mongoose) |
| Rate Limiting | Upstash Redis |

---

## Getting Started

### Prerequisites
- Node.js 18+
- [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (free tier works)
- [Upstash](https://upstash.com) Redis database (free tier works)

### 1. Clone the repo
```bash
git clone https://github.com/your-username/thinkboard.git
cd thinkboard
```

### 2. Set up environment variables

Create a `.env` file inside `backend/`:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/thinkboard
UPSTASH_REDIS_REST_URL=https://your-upstash-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-upstash-token
PORT=5001
NODE_ENV=development
```

### 3. Install and run

```bash
# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Start backend (port 5001)
cd backend && npm run dev

# Start frontend (port 5173)
cd frontend && npm run dev
```

Open [http://localhost:5173](http://localhost:5173)
