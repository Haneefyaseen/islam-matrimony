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
      "INSERT INTO users (uid, firstName, lastName, age) VALUES ('" +
        body.uid +
        "', '" +
        body.fname +
        "', '" +
        body.lname +
        "', '" +
        body.age +
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
