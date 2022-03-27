import { useState } from "react";
import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
// });

function Form() {
  //   const classes = useStyles();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [maritalStatus, setMaritalStatus] = useState("Married");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState("")
  const [category, setCategory] = useState("Tamil");
  const [qual, setQual] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = {
        name,
        gender,
        maritalStatus,
        age,
        height,
        category,
        qual,
        job,
        salary,
        address,
        mobile,
      };
      console.log(user)
      const response = await fetch("/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    alert("Response received");
    setName("");
    setGender("");
    setMaritalStatus("");
    setAge("");
    setHeight("");
    setCategory("");
    setQual("");
    setJob("");
    setSalary("");
    setAddress("");
    setMobile("");
  };
  return (
    <div>
      <form id="form" method="post" action="" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="gender">Choose gender</label>
        <select
          name="gender"
          value={gender}
          style={{ marginBottom: "5px", width: "200px" }}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label for="marital-status">Marital Status</label>
        <select
          name="marital-status"
          value={maritalStatus}
          style={{ width: "200px", marginBottom: "5px" }}
          onChange={(e) => setMaritalStatus(e.target.value)}
        >
          <option value="Married">Married</option>
          <option value="Unmarried">Unmarried</option>
          <option value="Divorced">Divorced</option>
        </select>
        <input
          required
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <label for="category">Choose your language</label>
        <select
          name="category"
          value={category}
          style={{ marginBottom: "5px", width: "200px" }}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Tamil">Tamil</option>
          <option value="Urdu">Urdu</option>
        </select>
        <input
          required
          type="text"
          placeholder="qualification"
          value={qual}
          onChange={(e) => setQual(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
