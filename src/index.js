import React from 'react';
import ReactDOM from 'react-dom';

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const name = "Jasim Uddin";
ReactDOM.render(
<>
  <h2>{`My Name is ${name}`}</h2>
  <h3>{`Today Current Date is = ${currDate}`}</h3>
  <h3>{`Now Current Time is = ${currTime}`}</h3>
</>,
  document.getElementById('root')
)