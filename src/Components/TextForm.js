import React,{useState} from 'react'
 
export default function TextForm(props) {
  const [text,setText]=useState('');

  const handleUpClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!","success")
  }
  const handleLowClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!","success")
  }
  const handleClearClick = ()=>{
    setText("");
  }
  const handleOnChange =(event) =>{
    setText(event.target.value)
  }
  return (
    <>
   <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="m b-3">
        
    <textarea className="form-control " value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-success mx-2' onClick={handleUpClick}>Upper Case</button>
    <button className='btn btn-secondary mx-2' onClick={handleLowClick}>Lower Case</button>
    <button className='btn btn-info mx-2' onClick={handleClearClick}>Clear Text </button>
   </div>
   <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split("").length} words and {text.length}characters</p>
    <p>{0.008 *text.split("").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here" }</p>

   </div>
   </>
  )
}
