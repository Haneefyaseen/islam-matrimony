import { useState } from "react";

function Profiles() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

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
      setUsers(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="profiles">
      <div className="profile-child">
        <button className="view-btn" onClick={handleView}>
          View Data
        </button>
        <input type="search" className="search" placeholder="search for names" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        <button type="button" className="search-btn" onClick={searchTable}>Search</button>
        <button type="button" className="reset-btn" onClick={()=> setUsers([])}>Reset</button>
      </div>
      <div>
        <table>
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
        </table>
      </div>
    </div>
  );
}

export default Profiles;
