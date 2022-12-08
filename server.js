const express = require("express"); // our express server
const app = express(); // generate an app object
const bodyParser = require("body-parser"); // requiring the body-parser
const PORT = process.env.PORT || 3000; // port that the server is running on =>
app.use(bodyParser.json()); // telling the app that we are going to use json to
const db = require("./login");
const routesub = require("./routes");
app.use("/login", routesub);

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://VENKAT:admin123@cluster0.tngd8hv.mongodb.net/?retryWrites=true&w=majority/log",
    {
      // connecting to the mongodb database name: "todo-app" locally
      keepAlive: true, // keeping the connection alive
      useNewUrlParser: true,
      //useUnifiedTclsopology: true,
    }
  )
  .then(() => {
    console.log("Database Connection");
  })
  .catch((err) => {
    console.log("Database error" + err);
  });
mongoose.set("debug", true); // enabling debugging information to be printed to
mongoose.Promise = Promise; // setting mongoose's Promise to use Node's Promise

app.listen(PORT, () => {
  // listening on port 3000
  console.log(`listening on port ${PORT}`);
});
