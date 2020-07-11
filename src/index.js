import React from 'react';
import ReactDOM from 'react-dom';

const myFirstName = "Jasim";
const myLastName = "Uddin";



ReactDOM.render(
  <>
  <h2>{`My name is ${myFirstName} ${myLastName}`}</h2>
  <h2>{`My First Name is ${myFirstName} My last name is ${myLastName}`}</h2>
  <h2>This is Random Number {Math.random()}</h2>
  <h3>My Favorite Number is {2+2}</h3>

  </>,
  document.getElementById('root')

)