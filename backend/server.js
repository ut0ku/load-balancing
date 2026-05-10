const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const SERVER_ID = process.env.SERVER_ID || `backend-${PORT}`;

// Middleware
app.use(express.json());

// Simple logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path} from ${req.ip}`);
    next();
});

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        port: PORT,
        timestamp: new Date().toISOString()
    });
});

// Main endpoint
app.get("/", (req, res) => {
    res.json({
        server: SERVER_ID,
        port: PORT,
        timestamp: new Date().toISOString(),
        pid: process.pid
    });
});

// Simulate slow endpoint for testing
app.get("/slow", (req, res) => {
    setTimeout(() => {
        res.json({
            message: "Slow response",
            port: PORT,
            delay: "10 seconds",
            timestamp: new Date().toISOString()
        });
    }, 10000);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`\n✓ Backend Server started on port ${PORT}`);
    console.log(`✓ Server ID: ${SERVER_ID}`);
    console.log(`✓ Process ID: ${process.pid}`);
    console.log(`✓ Endpoints: http://localhost:${PORT}/`);
    console.log(`✓ Health check: http://localhost:${PORT}/health`);
    console.log(`✓ API: http://localhost:${PORT}/api/data`);
    console.log(`✓ Ready to receive requests...\n`);
});

// Graceful shutdown
process.on("SIGINT", () => {
    console.log(`\n✓ Server on port ${PORT} is shutting down...`);
    process.exit(0);
});
