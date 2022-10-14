import React, { useState } from 'react'

export default function Calculater() {
    const[val,setVal]=useState("")
    const valchange = (e) =>{
        setVal(e.target.value)
    }

    const backspace = () =>{
      try{
        setVal(val.slice(0, -1))
    }catch(error){
       setVal("")
    }
    }
   
    const Calculater =()=>{
        try{
            setVal(eval(val))
        }catch(error){
           setVal("error")
        }
    }
  return (

    <div>
    <h1>Calculater</h1>
    <input value={val} onChange={valchange}/>
    <div style={{display:"flex",justifyContent:"center"}}>
    <button value="1" onClick={(e)=>setVal(val+e.target.value)}>1</button>
    <button value="2" onClick={(e)=>setVal(val+e.target.value)}>2</button>
    <button value="3" onClick={(e)=>setVal(val+e.target.value)}>3</button>
    <button value="+" onClick={(e)=>setVal(val+e.target.value)}>+</button>
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <button value="4" onClick={(e)=>setVal(val+e.target.value)}>4</button>
    <button value="5" onClick={(e)=>setVal(val+e.target.value)}>5</button>
    <button value="6" onClick={(e)=>setVal(val+e.target.value)}>6</button>
    <button value="-" onClick={(e)=>setVal(val+e.target.value)}>-</button>
    </div>
    
    <div style={{display:"flex",justifyContent:"center"}}>
    <button value="7" onClick={(e)=>setVal(val+e.target.value)}>7</button>
    <button value="8" onClick={(e)=>setVal(val+e.target.value)}>8</button>
    <button value="9" onClick={(e)=>setVal(val+e.target.value)}>9</button>
    <button value="*" onClick={(e)=>setVal(val+e.target.value)}>*</button>
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <button value="." onClick={(e)=>setVal(val+e.target.value)}>.</button>
    <button value="0" onClick={(e)=>setVal(val+e.target.value)}>0</button>
    <button value="=" onClick={()=>Calculater()}>=</button>
    {/* <button value="%" onClick={(e)=>setVal(val+e.target.value)}>%</button> */}
    <button value="C" onClick={()=>backspace()}>C</button>
    </div>
    </div>
  )
}
