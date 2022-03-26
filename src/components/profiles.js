import { useState } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';
import { Modal } from "@mui/material"

function Profiles() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false)
  const [gender, setGender] = useState("")
  const [category, setCategory] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")
  const [location, setLocation] = useState("")

  const searchTable = async () => {
      try {
          const res = await fetch('/users/search', {
              method: 'POST',
              body: JSON.stringify({name: search}),
              headers: {'Content-Type': 'application/json'},
          })
          const data = await res.json()
          setUsers(data)
      } catch (err) {
          console.error(err.message)
      }
  }

  const handleView = async () => {
    try {
      const res = await fetch("/users");
      const data = await res.json();
      if(data.length === 0) {
        alert("No data found!");
      }
      setUsers(data);
      console.log(data)
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSearch = async () => {
    const body = { gender, category, maritalStatus, location}
    try {
      const res = await fetch('/users/filter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      setUsers(data);
      setOpen(false);
      setGender("");setCategory("");setLocation("");setMaritalStatus("");
    } catch (err) {
      console.error(err.message);
    }
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false);

  return (
    <div className="profiles">
      <div className="profile-child">
        <button className="view-btn" onClick={handleView}>
          View Data
        </button>
        <input type="search" className="search" placeholder="search for names" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        <button onClick={handleOpen}><FilterAltIcon/></button>
        <Modal
        open={open}
        close={handleClose}>
          <div className="modal">
            <h2>Filter options</h2>
            <input type="text" value={gender} onChange={e=>setGender(e.target.value)}
            placeholder="Gender"/>
            <input type="text" value={category} onChange={e=>setCategory(e.target.value)}
            placeholder="Language"/>
            <input type="text" value={maritalStatus} onChange={e=>setMaritalStatus(e.target.value)}
            placeholder="Marital status"/>
            <input type="text" value={location} onChange={e=>setLocation(e.target.value)}
            placeholder="Location"/>
            <div className="modal-btn">
            <button className="modal-search" onClick={handleSearch}>Search</button>
            <button className="modal-close" onClick={handleClose}><CloseIcon/>Close</button>
            </div>
          </div>
        </Modal>
        <button type="button" className="search-btn" onClick={searchTable}>Search</button>
        <button type="button" className="reset-btn" onClick={()=> setUsers([])}>Reset</button>
      </div>
      <div>
        {/* <table>
          <thead>
            <th>UID</th>
            <th>NAME</th>
            <th>DOB</th>
            <th>AGE</th>
            <th>HEIGHT</th>
            <th>QUALIFICATION</th>
            <th>JOB</th>
            <th>FATHER NAME</th>
            <th>MOTHER NAME</th>
            <th>SIBILINGS</th>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.uid}>
                <td>{user.uid}</td>
                <td>{user.name}</td>
                <td>{user.dob.slice(0, 10)}</td>
                <td>{user.age}</td>
                <td>{user.height}</td>
                <td>{user.qualification}</td>
                <td>{user.job}</td>
                <td>{user.fathername}</td>
                <td>{user.mothername}</td>
                <td>{user.sibilings}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        {
          users.map(user => (
            <ul><span>Biodata - {user.uid}</span>
              <li><span>Name : </span><p>{user.name}</p></li>
              <li><span>Gender : </span><p>{user.gender}</p></li>
              <li><span>Marital Status : </span><p>{user.marital_status}</p></li>
              <li><span>Age : </span><p>{user.age}</p></li>
              <li><span>Height : </span><p>{user.height}</p></li>
              <li><span>Category : </span><p>{user.category}</p></li>
              <li><span>Qualification : </span><p>{user.qualification}</p></li>
              <li><span>Job : </span><p>{user.job}</p></li>
              <li><span>Salary : </span><p>{user.salary}</p></li>
            </ul>
          ))
        }
      </div>
    </div>
  );
}

export default Profiles;
