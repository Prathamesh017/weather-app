import React, { useEffect, useState } from 'react'

import "./Clock.css";
function Clock() {


const [cycles,setCycles]=useState(0);
const [start,setStart]=useState(false);
const [pause,setPause]=useState(true);
const [hours,setHours]=useState(0);
const [min,setMin]=useState(0);
const [sec,setSec]=useState(0);
const [focus,setFocus]=useState(true);


const startfunc=()=>{
    if(cycles==0 || !cycles){
        alert("Please Enter Interval");
        return;
    }
    
    
     setStart(true);
    
    
}

const pausefunc=()=>{
  setPause((p)=>{
    return !p;
  })
}

const stopfunc=()=>{
  setStart(false);
  setSec((p)=>{return 0});
  setMin((p)=>{return 0});
  setHours((p)=>{return 0});

}

const getlimit=()=>{
  const limit={
    highhour:"",
    highmin:"",
  }
if(cycles%2===0){

   limit.highhour=cycles/2 ;
   limit.highmin=0;
 
}
else{
 limit.highhour=(cycles-1)/2;
 limit.highmin=30;
}
return limit;
}


useEffect(()=>{
const {highhour,highmin}=getlimit();
if(hours===highhour && highmin===min){
   stopfunc();
}
console.log(hours);
if((min>=25 && min<30) || (min>=55 && min<60)){
  setFocus(false);
}
else{
  setFocus(true);
}



  if(start && pause){
    const interval=setInterval(()=>{
    // if()
      if(min>9){
        setMin((p)=>{
          return 0;
        })
        setHours((p)=>{
          return p+1;
        })
        
    }
      if(sec<9){
        setSec((p)=>{

         
          return p+1
        })
      }
      else{
        setSec((p)=>{
          return 0;
        })
        setMin((m)=>{
          return m+1;
        })
      }
      
      
      },1000);
      
      return()=>clearInterval(interval);
  }
},[start,sec,min,pause,hours])
 



    

  
  return (
      <div className='clock-info'>
      <h1 className='currenttitle' style={focus ? {color:"red"}: {color:"green"}}>{focus ? "Focus":"Break"}</h1>
    <div className='clock'>{start? `${hours}:${min}:${sec}` :`0:00:00`} </div>
    <input type="number" placeholder='enter intervals' onChange={(e)=>{setCycles(e.target.value)}}></input>
    <div className="buttons">
        <button className='startBtn' onClick={startfunc}>Start</button>
        <button className="stopBtn" onClick={pausefunc}>Pause</button>
        <button className='resetBtn' onClick={stopfunc}>Reset</button>
    </div>
      </div>

    
  )
}

export default Clock