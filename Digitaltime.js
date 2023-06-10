// import React, { useEffect, useState } from "react";
// const date = new Date();
// export default function Digitaltime() {
//   //state to set Time
//   const [dateTime, setDateTime] = useState({
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds()
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const date = new Date();

//       setDateTime({
//         hours: date.getHours(),
//         minutes: date.getMinutes(),
//         seconds: date.getSeconds(),
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="App">
//       <div>
//               <br /><br/>
//         {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
//       </div>
//     </div>
//   );
// }

import  { useState , useEffect } from 'react'

export const DateTime = () => {

    //state to set the date
    var [date,setDate] = useState(new Date());
    
    //
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
    return(
        <div>
            <br/><br/>
            <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString(('de-DE', options))}</p>

        </div>
    )
}
export default DateTime