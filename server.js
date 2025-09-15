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

// API endpoint
app.get("/api/users", (req, res) => {
  res.json(users);
});



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
