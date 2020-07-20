import React from 'react';
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

const App = () => (
  <>
    <h2 className="heading_style">List of Five favorite Movie </h2>
    {/* <FavS /> */}
    {(favSeries === 'netfilix') ? <Netflix/> : <Amazon/>}

  </>

)

export default App;