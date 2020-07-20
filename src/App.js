import React,{useState} from 'react';
import Cards from './Cards';
import Sdata from './Sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';

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
  return(
  <>
    <h2 className="heading_style">List of Five favorite Movie </h2>
    {/* <FavS /> */}
    {(favSeries === 'netfilix') ? <Netflix/> : <Amazon/>}

    <h1>{count}</h1>
    <button onClick={IncNum}> Click</button>

  </>
  )

}

export default App;