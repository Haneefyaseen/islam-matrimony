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

//console.log(path.join(__dirname, "build"));

app.get("/users", async function (req, res) {
  try {
     pool.query("SELECT * FROM biodatas order by uid asc", (error, results) => {
      if(error) throw error
      res.status(200)
      res.json(results.rows)
    })
  } catch (err) {
    console.error(err.message);
  }
});

app.post('/users/search', async function (req, res) {
  try {
    const body = req.body.name;
    pool.query(`SELECT * FROM biodatas where name ilike '%${body}%'`,
    (error ,results) => {
      if(error) throw error
      res.status(200)
      res.json(results.rows);
    })
  } catch (err) {
    console.error(err.message);
  }
})

app.post('/users/filter', async function (req, res) {
  try {
    const body = req.body;
    pool.query(`SELECT * FROM biodatas where gender ilike '${body.gender}%' and marital_status
    ilike '${body.maritalStatus}%' and category ilike '${body.category}%' and address ilike '%${body.location}%'
    order by uid asc`,
    (error ,results) => {
      if(error) throw error
      res.status(200)
      res.json(results.rows);
    })
  } catch (err) {
    console.error(err.message);
  }
})

app.post("/users", async function (req, res) {
  try {
    const body = req.body;
    const user = await pool.query(
      "INSERT INTO biodatas (name, gender, marital_status, age, height, category, qualification, job, salary, address, mobile) VALUES ('" +
        body.name +
        "', '" +
        body.gender +
        "', '" +
        body.maritalStatus +
        "', '" +
        body.age +
        "', '" +
        body.height +
        "', '" +
        body.category +
        "', '" +
        body.qual +
        "', '" +
        body.job +
        "', '" +
        body.salary +
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
