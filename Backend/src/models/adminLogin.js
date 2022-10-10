const mongoose = require("mongoose");
const db =
  "mongodb+srv://rajeevc:rajeev321@cluster0.w68gpom.mongodb.net/LearnerTracker";

mongoose.connect(db, (err) => {
  if (err) {
    console.error("Error!" + err);
  } else {
    console.log("Connected to Database");
  }
});

const Schema = mongoose.Schema;
const adminLoginSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("admin", adminLoginSchema, "admins");
