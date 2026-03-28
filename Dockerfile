FROM node:18-alpine

WORKDIR /app

# Install backend deps
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Install frontend deps and build
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Copy source
COPY backend/ ./backend/
COPY frontend/ ./frontend/

# Build the frontend
RUN cd frontend && npm run build

WORKDIR /app/backend

EXPOSE 5001

CMD ["node", "src/server.js"]