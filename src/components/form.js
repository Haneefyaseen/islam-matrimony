import { useState } from 'react';

function Form() {

    const [uid, setUid] = useState(0)
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [age, setAge] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {uid, fname, lname, age}
        const response = await fetch("/users", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        console.log(response)
    }
    return (
        <div className="container">
            <form method="post" action="" onSubmit={handleSubmit}>
                <input type="number" placeholder="UID" value={uid} onChange={(e)=>setUid(e.target.value)} />
                <input type="text" placeholder="FNAME" value={fname} onChange={(e)=>setFname(e.target.value)} />
                <input type="text" placeholder="LNAME" value={lname} onChange={(e)=>setLname(e.target.value)} />
                <input type="number" placeholder="AGE" value={age} onChange={(e)=>setAge(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;