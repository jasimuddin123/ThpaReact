import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';



const App = ()=> (
<>
<h2 className="heading_style">List of Five favorite Movie </h2>

  {Sdata.map((val,index) =>{
    return(
    <Cards
    key ={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
/>
  )

  })}

</>


)

export default App;