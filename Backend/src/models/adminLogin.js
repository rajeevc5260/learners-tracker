const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/LearnerTracker";

mongoose.connect(db, (err) => {
  if (err) {
    console.error("Error!" + err);
  } else {
    console.log("Connected to Database");
  }
});

const Schema = mongoose.Schema
const adminLoginSchema = new Schema({
    email:String,
    password:String
})

module.exports = mongoose.model('admin', adminLoginSchema, 'admins')