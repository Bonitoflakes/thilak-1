const mongoose = require("mongoose"); // requiring the mongoose package
const loginSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  // creating a schema for todo
  name: {
    // field1: task Pushing up the data
    type: String, // task is a string
  },
  email: {
    // field2: completed
    type: String, // it is a boolean
  },
  password: {
    // field2: completed
    type: String, // it is a boolean
  },
});
const loginmodel = mongoose.model("log", loginSchema); // creating the model from the schema
module.exports = loginmodel; // exporting the mode
