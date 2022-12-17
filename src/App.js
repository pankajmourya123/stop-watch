import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
let adjustInterval=undefined;
function App() {
  const [watch,setWatch]=useState(0)
  const [started,setStarted]=useState(false)
  const startWatch=()=>{
 adjustInterval = setInterval(() => {
    // setWatch(watch+1) yaha pen state async terike se bhave kar rahi use upadted mil raha hi nahi hai
    setWatch((x)=>x+1)  
     //time interval is function ke andar hi scope toh hum ise pure function ka scope denge

  },1000);   //seconds
  setStarted(true)
  }
  const PauseWatch=()=>{
    clearInterval(adjustInterval)
    setStarted(false)
  }
  const resetWatch=()=>{
    clearInterval(adjustInterval)
    setStarted(false)
    setWatch(0)
  }
  return (
     <div class="container">
 <div class="timerDisplay">
   <pre>   {watch} seconds</pre>
</div>
<div class="buttons">
<button id="startTimer"  disabled={started} onClick={startWatch}>Start</button>
  <button id="pauseTimer" onClick={PauseWatch}>Pause</button>
  <button id="resetTimer" onClick={resetWatch}>Reset</button>
</div>
 </div>


  );
}

export default App;
