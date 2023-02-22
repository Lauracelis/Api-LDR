// Import the express and mongoose modules
const express = require("express");
const mongoose = require("mongoose");

// Set the server port
const port = 3030;

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

// Set the database URL and credentials
const user = "lauracelis29";
const password = "Lucky2021...";
const dbname = "discography";
const url = `mongodb+srv://${user}:${password}@cluster0.zvfnon6.mongodb.net/${dbname}`;

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
