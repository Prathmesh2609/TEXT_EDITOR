import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar2 from "./components/Navbar2";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import { type } from "@testing-library/user-event/dist/type";

function App() {
  const [mode,setmode] = useState('light'); 
  const [alert,setalert] = useState(null); 

    const showalert=(message, type)=>{
      setalert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setalert(null)
      }, 3000);
    }
  const toggleMode = ()=>{
    if (mode ==="light") {
      setmode('dark');
      document.body.style.backgroundColor = '#222231';
      showalert(" dark mode successfully on","success")
    }
    else
    {
      setmode("light");
      document.body.style.backgroundColor = 'white';
      showalert(" light mode successfully on","success")
    }
  }
  const toggleMode2 = ()=>{
    if (mode ==="light") {
      setmode('dark');
      document.body.style.backgroundColor = '#072401';
      showalert(" dark mode successfully on","success")
    }
    else
    {
      setmode("light");
      document.body.style.backgroundColor = 'white';
      showalert(" light mode successfully on","success")
    }
  }
  return (
    <>
      <Navbar2 title="text" abouttitle="About Us" mode={mode}  toggleMode={toggleMode} toggleMode2={toggleMode2}/>
      <Alert alert={alert}/>
      {/* <Navbar2/> */}
      <div className="container">
     <Textform showalert={showalert} heading="Enter the text to analyze" mode={mode}/>
      {/* <About/> */}
      </div>
      
    </>
  );
}
export default App;
