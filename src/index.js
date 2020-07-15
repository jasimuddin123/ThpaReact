import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdata';


// function ncard(val){
//   console.log(val);
//   return(
//     <Cards

//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}
// />
//   )
// }
ReactDOM.render(
<>
<h2 className="heading_style">List of Five favorite Movie </h2>

  {Sdata.map((val,index) =>{
    return(
    <Cards

    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
/>
  )

  })}

</>,
 document.getElementById('root')

)