import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alertText, setAlertText] = useState(null)
  const showAlert = (message, type) => {

    setAlertText({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlertText(null);

    }, 2000);


  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('LightMode enable successfully', 'success');
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('DarkMode enable successfully', 'success');
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> ye default value lega */}
      <Alert alertText={alertText} />
      <div className="container my-3">
        <TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert} />
        {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert} />} />
          </Routes> */}
      </div>
      {/* </Router> */}

    </>
  );
}

export default App;
