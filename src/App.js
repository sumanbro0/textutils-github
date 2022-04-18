import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "white"
      showAlert("Dark mode has been enabled", "SUCCESS")
      document.title = "TextUtils | DarkMode"

      // it can also be done
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000)
      // setInterval(() => {
      //   document.title = "install textutils now";
      // }, 2500)

    } else {
      setMode("light")
      document.body.style.backgroundColor = "#f8f9fa"
      document.body.style.color = "black"
      showAlert("light mode has been enabled", "SUCCESS")
      document.title("TextUtils | LightMode")
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  return (
    <>
      <Navbar title="TextUtils" about="About Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Textform heading="Enter the text below to analyze...." mode={mode} showAlert={showAlert} />
      </div>

    </>
  );
}

export default App;
