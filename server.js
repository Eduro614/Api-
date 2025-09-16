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

app.get("/users", (req, res) => {
  res.json(users);
});

// Use Render's dynamic port, not hardcoded 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
