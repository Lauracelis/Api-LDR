// Import the express and mongoose modules
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

// Set the server port
const port = process.env.PORT||3030;
const url = process.env.URL;

// Create a new express app
const app = express();

// Import the routes module
const routes = require("./routes/route");

// Import the CORS module
const cors = require('cors');



// Set the options for CORS
const corsOption={
  origin:"*",
  method:["GET", "POST", "PUT", "DELETE"],
  allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true
};

// Use CORS with the provided options
app.use(cors(corsOption));

// Parse incoming request data as JSON
app.use(express.json());

// Set the database connection options
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};



// Disable the strict query mode for mongoose
mongoose.set("strictQuery", false);

// Connect to the database using the provided URL and options
mongoose
  .connect(url, connectionOptions)
  .then(() => console.log("successful connection"))
  .catch((err) => console.error(err));

// Use the imported routes module with the "/App" endpoint
app.use("/App", routes);

// Start the server on the provided port
app.listen(port, () => {
  console.log(`Server on port ${port}:`, `http://localhost:${port}/`);
})
