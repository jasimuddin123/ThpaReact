import React from 'react';
import ReactDOM from 'react-dom';
const myName = "Jasim Uddin";
ReactDOM.render(
  <>
  <h2>My Name is {myName}</h2>
  <h2>This is Random Number {Math.random()}</h2>
  <h3>My Favorite Number is {2+2}</h3>

  </>,
  document.getElementById('root')

)