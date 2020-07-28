import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState();

  const [fullName, setFullName] = useState();

  const [lastName, setLastName] = useState();

  const [lastNameNew, setLastNameNew] = useState();


  const inputEvent = (event)=>{
    setName(event.target.value);
  }


  const onSubmits = (event)=>{
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);
  }
  const inputEventTwo = (event) =>{
    setLastName(event.target.value);
  };
  
  return(
    <>
     <div className="main-div">
     <form onSubmit={onSubmits}>
     <div>
          <h1>Hello {fullName} {lastNameNew} </h1>
          <input type="text" placeholder="First Name" onChange={inputEvent}
            value={name}
          />
          <input type="text" placeholder="Last Name"
            onChange={inputEventTwo}
            value={lastName}
          />
          <button type="submit" onClick={onSubmits}> Click Me </button>
      </div>
      </form>
     </div>

    </>
  )
}
export default App;
