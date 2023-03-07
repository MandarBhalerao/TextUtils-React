import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // tell whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  // const [greenmode, setGreenMode] = useState('light');

  const [bgcolor, setBgColor] = useState('white')

  const togglePurple = () => {
    if (mode === 'light') {
      setMode('purple');
      document.body.style.backgroundColor = '#320a35';
      setBgColor("#320a35")
      showAlert("Purple mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const toggleRed = () => {
    if (mode === 'light') {
      setMode('red');
      document.body.style.backgroundColor = '#621212';
      setBgColor("#621212")
      showAlert("Red mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  const toggleGreen = () => {
    if (mode === 'light') {
      setMode('green');
      document.body.style.backgroundColor = '#0a4e10';
      setBgColor('#0a4e10')
      showAlert("Green mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setBgColor('#042743')
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // title ko chamka sakte hai
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";

    }
  }
  return (

    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Router> */}

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleGreen={toggleGreen} toggleRed={toggleRed} togglePurple={togglePurple} bgcolor={bgcolor} />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* 
          /users ---> Component 1
          /users/home ---> ---> Component 2
          therefore we must use 'exact' for full matching of the path or else react matches partially
          and if we need component 2 then react will match with component 1 and return component 1 only
          therefore always use 'exact'
          */}
          {/* <Routes> */}
            {/* < Route exact path="/about" element={<About/>} /> */}
            {/* <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} bgcolor={bgcolor} />}/> */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} bgcolor={bgcolor} />
          {/* </Routes> */}
          {/* <About/> */}

        </div>
      {/* </Router> */}

    </>

  );
}

export default App;
