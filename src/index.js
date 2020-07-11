import React from 'react';
import ReactDOM from 'react-dom';


const name = "Jasim Uddin";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const img4 = "https://picsum.photos/350/300";
const links = 'https://www.facebook.com/';

ReactDOM.render(
<>
  <h2 contentEditable="true">{`My Name is ${name}`}</h2>
  <img src={img1} alt="Photo"/>
  <img src={img2} alt="Photo"/>
  <img src={img3} alt="Photo"/>
  <img src={img4} alt="Photo"/>

  <a href={links} target="_blanks">
  <img src={img4} alt="Photo"/>
  </a>

</>,
  document.getElementById('root')
)