const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const adminLogin = require("./src/models/adminLogin");
const learnersData = require("./src/models/learnersData");
const placementAuthData = require("./src/models/placementAuth");
const trainerAuthData = require("./src/models/trainerAuth");

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

  adminLogin.findOne({ email: adminData.email }, (error, admin) => {
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
          res.status(200).send({ token });
        }
      }
    }
  });
});

// Insert Data placement officer
app.post("/addPlacementData", (req, res) => {
  var placementAuthDetails = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  var addPlacementAuthData = placementAuthData(placementAuthDetails);
  addPlacementAuthData.save();

  placementAuthData.find().then((addPlacementAuthData) => {
    res.send(addPlacementAuthData);
  });
});

// Insert Trainer head
app.post("/addTrainerHeadData", (req, res) => {
  var trainerAuthDetails = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  var addTrainerAuthData = trainerAuthData(trainerAuthDetails);
  addTrainerAuthData.save();

  trainerAuthData.find().then((addTrainerAuthData) => {
    res.send(addTrainerAuthData);
  });
});

// insert Single Learners data POST
app.post("/addData", (req, res) => {
  var learnerDetails = {
    learnerId: req.body.learnerId,
    name: req.body.name,
    project: req.body.project,
    batch: req.body.batch,
    courseStatus: req.body.courseStatus,
  };
  var addLearnerData = learnersData(learnerDetails);
  addLearnerData.save();

  learnersData.find().then((addLearnerData) => {
    res.send(addLearnerData);
  });
});

// Read learners Details in Analytics
app.get("/learnerAnalytics", (req, res) => {
  learnersData.find().then((addLearnerData) => {
    res.send(addLearnerData);
  });
});

// update to find id
app.get("/learnerAnalytics/:id", (req, res) => {
  const id = req.params.id;
  learnersData.findOne({ _id: id }).then((book) => {
    res.send(book);
  });
});

// Update learnerAnalytics details
app.put("/learnerUpdate", (req, res) => {
  var id = req.params.id;
  var learnerId = req.params.learnerId;
  var name = req.params.name;
  var project = req.params.project;
  var batch = req.params.batch;
  var courseStatus = req.params.courseStatus;
  var placementStatus = req.params.placementStatus;

  console.log(req.body);
  (id = req.body._id),
    (learnerId = req.body.learnerId),
    (name = req.body.name),
    (project = req.body.project),
    (batch = req.body.batch),
    (courseStatus = req.body.courseStatus),
    (placementStatus = req.body.placementStatus),
    learnersData
      .findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            learnerId: req.body.learnerId,
            name: req.body.name,
            project: req.body.project,
            batch: req.body.batch,
            courseStatus: req.body.courseStatus,
            placementStatus: req.body.placementStatus,
          },
        }
      )
      .then(() => {
        res.send();
      });
});





// DELETE learners Details Via ID
app.delete("/remove/:id", (req, res) => {
  console.log("Deleting");
  learnersData.findByIdAndRemove(req.params.id, (err, deleteLearner) => {
    if (err) {
      res.send("Error in deleting the Learner");
    } else {
      res.json(deleteLearner);
    }
  });
});

// Port where backend Runs
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
