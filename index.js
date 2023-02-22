const express = require("express");
const mongoose = require("mongoose");
const port = 3030;
const app = express();
const routes = require("./routes/route");
const cors = require('cors'); 

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const corsOption={ 
  origin:"*",
  method:["GET", "POST", "PUT", "DELETE"],
  allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true
};
app.use(cors(corsOption));

app.use(express.json());

const user = "lauracelis29";
const password = "Lucky2021...";
const dbname = "discography";

const url = `mongodb+srv://${user}:${password}@cluster0.zvfnon6.mongodb.net/${dbname}`;

mongoose.set("strictQuery", false);
mongoose
  .connect(url, connectionOptions)
  .then(() => console.log("successful connection"))
  .catch((err) => console.error(err));

app.use("/App", routes);

app.listen(port, () => {
  console.log(`Server on port ${port}:`, `http://localhost:${port}/`);
});
