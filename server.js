const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

// Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the ContactKeeperApp" })
);

app.listen(PORT, () => console.log(`Server started on port:${PORT}`));
