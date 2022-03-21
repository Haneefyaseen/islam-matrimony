const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const path = require("path");
const pool = require("./db");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

console.log(path.join(__dirname, "build"));

app.post("/users", async function (req, res) {
  try {
    const body = req.body;
    const user = await pool.query(
      "INSERT INTO biodatas (name, dob, age, height, qualification, job, fatherName, motherName, sibilings, address, mobile) VALUES ('" +
        body.name +
        "', '" +
        body.dob +
        "', '" +
        body.age +
        "', '" +
        body.height +
        "', '" +
        body.qual +
        "', '" +
        body.job +
        "', '" +
        body.fatherName +
        "', '" +
        body.motherName +
        "', '" +
        body.sibilings +
        "', '" +
        body.address +
        "', '" +
        body.mobile +
        "')"
    );
    res.json(user);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
