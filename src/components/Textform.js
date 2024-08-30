import { useState } from "react";
import React from "react";

export default function Textform(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text)
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert(" Convert to UpperCase successfully","success")
    }
    const handleLoClick =()=>{
        // console.log("Uppercase was clicked" + text)
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert(" Convert to LowerCase successfully","success")
    }

    const handleClearClick =()=>{
        let newtext = '';
        setText(newtext)
        props.showalert(" Clear text successfully ","success")
    }

    const handleInvClick =()=>{
        let newtext = text.split(" ").reverse().join(" ");
        setText(newtext)
    }

    const handleCoClick =()=>{
        let newtext = text;
        navigator.clipboard.writeText(newtext);

    }
    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    // setText('new text')
    return (
    <div className="container">
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#222231':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleInvClick}>Inverse Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCoClick}>Copy Text to clipboard</button>
    <div className="container my-3">
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>Your text summary</h1>
      <p style={{color:props.mode==='dark'?'white':'black'}}>{text.split(" ").length} word and {text.length} character</p>
      <p style={{color:props.mode==='dark'?'white':'black'}}>{0.008*text.split(" ").length} Mintues to read this</p>
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h1>
      <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:'Enter something into preview it here'}</p>
    </div>
    </div>
  );
}
