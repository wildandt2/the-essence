const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

// Default route (biar gampang test)
app.get("/", (req, res) => {
  res.send("Backend is running ");
});

// Port (ganti ke 5000)
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});