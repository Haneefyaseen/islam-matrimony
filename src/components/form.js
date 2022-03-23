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
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState("");
  const [qual, setQual] = useState("");
  const [job, setJob] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [sibilings, setSibilings] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = {
        name,
        dob,
        age,
        height,
        qual,
        job,
        fname,
        mname,
        sibilings,
        address,
        mobile,
      };
      const response = await fetch("/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    alert("Response received")
    setName("");setDob("");setAge("");setHeight("");setQual("");setJob("");setFname("");
    setMname("");setSibilings("");setAddress("");setMobile("");
  };
  return (
    <div >
      <form  id="form" method="post" action="" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type="date"
          placeholder="date of birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
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
          type="text"
          placeholder="father name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          placeholder="mother name"
          value={mname}
          onChange={(e) => setMname(e.target.value)}
        />
        <input
          type="text"
          placeholder="sibilings"
          value={sibilings}
          onChange={(e) => setSibilings(e.target.value)}
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
