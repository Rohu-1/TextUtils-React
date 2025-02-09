import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  
  const [mode,setMode]=useState('light');
  const [alert,setAlert] =useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled","success");    }
  }


  return (
    <>
    {/* <Router>
   <Navbar title="TextUtils" home="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container">
  

<Routes>
  <Route exact path="/about" element={<About />} />
  <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text to Analyze Below" mode={mode}/> } />
</Routes>

   
   </div>
   </Router> */}
   <Navbar title="TextUtils" home="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container"></div>
    <TextForm showAlert={showAlert} heading="Enter Your Text to Analyze Below" mode={mode}/>
   </>
   
   
  );
}

export default App;
