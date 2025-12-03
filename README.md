# OpenTelemetry Observability Assignment

This project demonstrates observability using OpenTelemetry with a Node.js Express application connected to MongoDB, with traces exported to Jaeger.

## Prerequisites

- Node.js (v14 or higher)
- Docker Desktop installed and running
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start MongoDB Container

```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

### 3. Start Jaeger Container

```bash
docker run -d --name jaeger \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  -p 5778:5778 \
  -p 9411:9411 \
  jaegertracing/jaeger:2.5.0
```

### 4. Run the Application

```bash
npm start
```

Or directly:
```bash
node --require tracing.js index.js
```

### 5. Test the Application

In another terminal, make requests:

```bash
curl http://localhost:3000/todo
curl http://localhost:3000/todo/1
```

### 6. View Traces in Jaeger UI

Open your browser and navigate to: http://localhost:16686/

- Select "todo-service" from the Service dropdown
- Click "Find Traces"
- Explore the trace details

## Project Structure

- `index.js` - Express server with MongoDB connection and API endpoints
- `tracing.js` - OpenTelemetry SDK configuration with instrumentations
- `package.json` - Project dependencies and scripts

## API Endpoints

- `GET /todo` - Get all todos
- `GET /todo/:id` - Get a specific todo by ID

## Technologies Used

- Express.js - Web framework
- MongoDB - Database
- OpenTelemetry - Observability framework
- Jaeger - Distributed tracing backend

