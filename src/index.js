import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const name = "Jasim Uddin";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const img4 = "https://picsum.photos/350/300";
const links = 'https://www.facebook.com/';



const heading ={

    fontWeight:'bold',
    textAlign:'center',
    color: '#fa9191',
    fontSize:'50px',
    textTransform:'capitalize',
    boxShadow:'0px 2px 4px #ffe9c5',
    margin:'50px 0px',
    fontFamily:"'Roboto',sans-serif",


}

ReactDOM.render(
  <>
    <h2 style={heading}>{`My Name is ${name}`}</h2>


    <div className="img_div">
      <img src={img1} alt="Photo" />
      <img src={img2} alt="Photo" />
      <img src={img3} alt="Photo" />
      <img src={img4} alt="Photo" />

      <a href={links} target="_blanks">
        <img src={img4} alt="Photo" />
      </a>


    </div>

  </>,
  document.getElementById('root')
)