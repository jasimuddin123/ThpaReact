import React,{useState} from 'react';


import Netflix from './Netflix';
import Amazon from './Amazon';
import './App.css';

const favSeries = 'amazon';

// const FavS = () => {
//   if (favSeries === 'netfilix') {
//      return <Netflix></Netflix>

//   } else {

//     return (<Amazon></Amazon> );

//   }

// }



const App = () => {

  const state = useState();
// console.log(state);
// let count = 1;

const [count,setCount]  = useState(0);

const IncNum = ()=>{
  setCount(count+1);
  // console.log("clicked " + count++);
};

let newTime = new Date().toLocaleTimeString();

const [time,setCtime] = useState(newTime);

  const updateTime = ()=>{
    let newCtime = new Date().toLocaleTimeString();

    setCtime(newCtime);

  }

  let justTime = new Date().toLocaleTimeString();
  const [dTime, dSetTime] = useState(justTime);

  const dynamicTime = ()=>{
   justTime = new Date().toLocaleTimeString();
    dSetTime(justTime);
  };
    setInterval(dynamicTime,1000);

  return(
  <>
    <h1> Dynamic Time = {dTime}</h1>
    



    <h2> {time} </h2>
    <button onClick={updateTime}> Get Time </button>
    <h2 className="heading_style">List of Five favorite Movie </h2>
    {/* <FavS /> */}
    {(favSeries === 'netfilix') ? <Netflix/> : <Amazon/>}

    <h1>{count}</h1>
    <button onClick={IncNum}> Click</button>

  </>
  )

}

export default App;