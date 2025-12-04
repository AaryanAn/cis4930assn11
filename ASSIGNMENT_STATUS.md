# Assignment Status

## ✅ Completed Steps

1. **Project Setup**
   - ✅ GitHub repository created and initialized
   - ✅ Node.js project initialized with all dependencies
   - ✅ All required packages installed

2. **Application Files**
   - ✅ `index.js` - Express server with MongoDB connection
   - ✅ `tracing.js` - OpenTelemetry configuration with Jaeger support
   - ✅ `package.json` - All dependencies configured
   - ✅ `README.md` - Setup instructions
   - ✅ `.gitignore` - Properly configured

3. **Docker Containers**
   - ✅ MongoDB container running on port 27017
   - ✅ Jaeger container running on port 16686

4. **Application Running**
   - ✅ Server is running and responding to requests
   - ✅ API endpoints are working:
     - `GET /todo` - Returns all todos
     - `GET /todo/:id` - Returns specific todo

5. **Code Committed**
   - ✅ All code pushed to GitHub: https://github.com/AaryanAn/cis4930assn11.git

## 📋 Next Steps for You

### 1. View Traces in Jaeger UI

Open your browser and go to: **http://localhost:16686/**

In the Jaeger UI:
1. Select **"todo-service"** from the Service dropdown (if it appears)
2. If "todo-service" doesn't appear, try:
   - Click "Find Traces" without selecting a service
   - Check if traces appear under a different service name
3. Click on a trace to see detailed span information
4. Take a screenshot showing:
   - The service selection
   - Trace timeline
   - Span details

### 2. Generate More Traces

If traces don't appear immediately, make more requests:

```bash
curl http://localhost:3000/todo
curl http://localhost:3000/todo/1
curl http://localhost:3000/todo/2
curl http://localhost:3000/todo/3
```

Wait a few seconds, then refresh the Jaeger UI.

### 3. Write Your Summary

Create a 250-350 word summary explaining:
- **Traces**: What they show, span relationships, timing information
- **Metrics**: What metrics were collected (if visible)
- **Logs**: What log information was captured
- **Observability Value**: How this helps with debugging and performance optimization

### 4. Create Google Doc Submission

Create a shareable Google Doc with:
1. **GitHub Repository Link** (1.5 points)
   - Link: https://github.com/AaryanAn/cis4930assn11.git

2. **Screenshot of Jaeger UI** (1.5 points)
   - Screenshot showing your traces in Jaeger

3. **Summary** (3 points)
   - 250-350 words about telemetry data understanding

## 🔧 Troubleshooting

If traces don't appear in Jaeger:

1. **Check if server is running:**
   ```bash
   ps aux | grep "node.*index.js"
   ```

2. **Restart the server:**
   ```bash
   cd /Users/aaryananand/Documents/College/Fall2025/4930/observability/cis4930assn11
   pkill -f "node.*index.js"
   USE_JAEGER=true node --require ./tracing.js index.js
   ```

3. **Check Docker containers:**
   ```bash
   docker ps
   ```

4. **Check Jaeger logs:**
   ```bash
   docker logs jaeger
   ```

5. **Try console exporter to verify tracing works:**
   ```bash
   node --require ./tracing.js index.js
   # Make requests and check console output for spans
   ```

## 📝 Current Status

- ✅ All code is complete and working
- ✅ Server is running and responding
- ✅ Docker containers are running
- ⚠️ Traces may need to be viewed in Jaeger UI directly
- ⚠️ You may need to make additional requests to generate more traces

## 🎯 What's Working

- Express server on port 3000
- MongoDB connection and data retrieval
- OpenTelemetry instrumentation configured
- Jaeger UI accessible at http://localhost:16686
- All API endpoints functional

