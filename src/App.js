import './App.css';
import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';

function App() {
  const [time,setTime] = useState({ms:0, m:0, s:0, h:0})

  const start = () => console.log("Hello")
  
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className='stopwatch'>
          <DisplayComponent time={time}/>
          <BtnComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
