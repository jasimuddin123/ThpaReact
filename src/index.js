import React from 'react';
import ReactDOM from 'react-dom';
import favoritePerson,{favProg,myName,myNames} from './App';

ReactDOM.render(
    <>
        <ol>
            <li>Jasim Uddin</li>
            <li>{favoritePerson}</li>
            <li>{favProg}</li>
            <li>{myName()}</li>
            <li>{myNames()}</li>
        </ol>

    </>,

    document.getElementById("root")
)