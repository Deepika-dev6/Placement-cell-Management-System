const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const profileRoutes = require("./routes/profile");

const jobRoutes = require("./routes/jobRoutes");

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/profile", profileRoutes);

app.use("/api/jobs", jobRoutes);

// MongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });

// Test route
app.get("/", (req, res) => {
    res.send("Placement Cell Backend is running!");
});