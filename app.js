const express = require("express");
const app = express();

app.use(express.json());

let users = [];

// Health check
app.get("/", (req, res) => {
  res.send("DockerApp is running 🚀");
});

// Get users
app.get("/users", (req, res) => {
  res.json(users);
});

// Create user
app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

//health check
app.get("/health",(req,res) =>{
	res.send("status:ok");
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
