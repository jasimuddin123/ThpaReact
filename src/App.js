import React from 'react';
import {add, sub, multi, div} from './Calc';
function App(){
  return(
<>
        <ul>
            <li> the Sum of Two Number is {add(40,4)}</li>
            <li> {sub(40,4)}</li>
            <li>  {multi(40,4)}</li>
            <li>  {div(40,3)}</li>
        </ul>

    </>
  )
}
export default App;