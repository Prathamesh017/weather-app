import React, { useState } from 'react'
import "./index.css";
function App() {
  const [city,setcity]=useState();
  const [temp,settemp]=useState("")
  const [data,setdata]=useState("");
  
  
  const getData=async(city_name)=>{
    try{
      const response=await fetch(`http://api.weatherapi.com/v1/current.json?key=becf17f5d71f4c2886e110734221006&q=${city_name}&aqi=no`);
      const data= await response.json();
    
      console.log(data.location.name);
      console.log(data.current.temp_c);


       setcity(data.location.name);
       settemp(data.current.temp_c);
      console.log(city);
   
    }
    
    catch(error){
      // console.log(error);
    }
  }

 const search=(event)=>{setdata(event.target.value)};

const submit=()=>{
 getData(data);
}

  return (
     <div className="Wheather-app">
       <div className="box">
       <input type="search" className='search' onChange={search}></input>
       <div className="fetching-info">
         <h2> City:{city}</h2>
         <h4> Temperature:{temp}</h4>
         <button onClick={submit} className="submit">Submit</button>
       </div>
       </div>
     </div>
  )
}

export default App