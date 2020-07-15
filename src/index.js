import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdata';



ReactDOM.render(
<>
<h2 className="heading_style">List of Five favorite Movie </h2>
<Cards

    imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
    link={Sdata[0].link}
/>

<Cards

    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].link}
/>


<Cards

    imgsrc={Sdata[2].imgsrc}
    title={Sdata[2].title}
    sname={Sdata[2].sname}
    link={Sdata[2].link}
/>


<Cards

    imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title}
    sname={Sdata[3].sname}
    link={Sdata[3].link}
/>

</>,
 document.getElementById('root')

)