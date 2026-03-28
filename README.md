
A full-stack notes app for creating, editing, and deleting notes. Built with the MERN stack.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-Local-47A248?style=flat&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?style=flat&logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat&logo=docker&logoColor=white)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS, DaisyUI |
| Backend | Node.js, Express 4 |
| Database | MongoDB (local, via Docker) |

---

## Getting Started

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

### 1. Clone the repo
```bash
git clone https://github.com/your-username/thinkboard.git
cd thinkboard
```

### 2. Set up environment variables
```bash
cp .env.example .env
```

### 3. Start the app
```bash
docker compose up --build
```

Open [http://localhost:5001](http://localhost:5001)

---

## Useful Commands

| Command | Description |
|---|---|
| `docker compose up --build` | First run, or after code changes |
| `docker compose up` | Start the app |
| `docker compose down` | Stop the app |
| `docker compose down -v` | Stop and reset the database |
