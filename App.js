// import logo from './logo.svg';
import React ,{ useState } from 'react';
import './App.css';
import Navbarr from './components/Navbarr';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light'); // Whether dark mode is enable
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type //we can change or take the same name
    })
    setTimeout(() =>{
      setAlert(null);
    },1500)
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.body.style.color = 'white';
      showAlert("Dark mode has been enabled!","success");
      setInterval(()=>{
        document.title = 'Indian TextUtils Now';
      },1000)
      setInterval(()=>{
        document.title = 'Please wait';
      },1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
      showAlert("Dark mode has been disabled!","success");
    }
  }
  return (
    <>
     <Router> 
      <Navbarr title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}>

            </Route> 
            <Route exact path="/" element={<TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>}> 

            </Route> 
          </Routes> 
        
         {/* <About/>  */}
      </div>
     </Router> 
    </>
  );
}

export default App;