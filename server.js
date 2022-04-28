require("dotenv").config();

const express = require("express");
const app = express();

// Middleware
app.use(express.json()); // for parsing application/json

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("error_stack", err.stack);
  console.log("error_name:", err.name);
  console.log("error_code:", err.code);

  res.status(500).json({ message: "Something broke!" });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// listen on pc port
app.listen(process.env.port || 3000, () => {
  console.log(`Server is listening on port ${process.env.port || 3000}`);
});
