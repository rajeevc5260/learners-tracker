const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const adminLogin = require("./src/models/adminLogin");



const PORT = 3000;
const app = express();


app.use(cors());
app.use(bodyParser.json());

// Tested
app.get("/", (req, res) => {
  res.send("Server is ready GET");
});


// Admin Login
app.post("/login", (req, res) => {
  let adminData = req.body;

  adminLogin.findOne({email: adminData.email}, (error, admin) => {
    if (error) {
      console.log(error);
    } else {
      if (!admin) {
        res.status(401).send("Invalid email");
      } else {
        if (admin.password !== adminData.password) {
          res.status(401).send("Invalid password");
        } else {
          let payload = { subject: admin._id };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({token});
        }
      }
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
