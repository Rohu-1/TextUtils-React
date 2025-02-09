import React,{useState}from 'react'

export default function About() {
 const [myStyle,setMyStyle]=useState({
    color:'white',
    backgroundColor:'black'
    
 })
 const [btntext,setBtnText]=useState('Enable Dark Mode')
const toggleStyle=()=>{
    if(myStyle.color==='white'){
        setMyStyle({
            color:'black',
            backgroundColor:'white',
            border:'1px solid white'
        })
      setBtnText("Enable Dark Mode")
    }
    else{
        setMyStyle({
            color:'white',
            backgroundColor:'black'
        })
        setBtnText("Enable Light Mode");
    }
 }
 
  return (
   <>
    <h1>About TextUtils</h1>
    <p>
      TextUtils is an app which can convert lowercase words to uppercase and vice versa and can also clear the text box chat.It can change the theme from light to dark and vice versa.
    </p>
      
      </>


  )
}
