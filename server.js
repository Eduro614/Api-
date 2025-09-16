const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Sample data
const users = [
  { id: 1, name: "Alice", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Charlie", role: "Manager" }
];

app.get("/", (req, res) => {
  res.send("🚀 API is running successfully on Render!");
});

app.get("/users", (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});