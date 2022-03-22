import './App.css';
import { useState } from 'react'
import { Container } from '@mui/material'
import Home from './components/home';
import About from './components/about';
import Form from './components/form';
import Profiles from './components/profiles';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  nav: {
    backgroundColor: 'lightblue',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-evenly'
  }, 
  btn: {
    padding: '10px',
    width: '100px',
    backgroundColor: 'white',
    color: 'maroon',
    '&:hover': {
      background: 'linear-gradient(to bottom left, cyan, pink, white)',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  }
})

function App() {

  const [active, setActive] = useState("Home")
  const classes = useStyles()
  return (
    <div className="App">
      <nav className={classes.nav} >
        <button className={classes.btn} onClick={() => setActive("Home")}>Home</button>
        <button className={classes.btn} onClick={() => setActive("About")}>About</button>
        <button className={classes.btn} onClick={() => setActive("Form")}>Form</button>
        <button className={classes.btn} onClick={() => setActive("Profiles")}>Profiles</button>
      </nav>
      <Container>
        {active === "Home" && <Home/>}
        {active === "About" && <About/>}
        {active === "Form" && <Form/>}
        {active === "Profiles" && <Profiles/>}
      </Container>
    </div>
  );
}

export default App;
