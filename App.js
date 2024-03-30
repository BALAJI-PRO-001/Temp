import React, { useState, useEffect, useContext, createContext, useReducer, useRef } from "react";
import "./App.css";

const UserContext = createContext();

const Component1 = () => {
  let [userName, setUserName] = useState("Ram");
  console.log("Component 1");
  return (
    <UserContext.Provider value={userName}>
      <h3>Component 1</h3>
      <Component2></Component2>
    </UserContext.Provider>
  );
}

const Component2 = () => {
  console.log("Component 2");
  return (
    <React.Fragment>
      <h3>Component 2</h3>
      <Component3></Component3>
    </React.Fragment>
  );
}


const Component3 = () => {
  console.log("Component 3");
  return (
    <React.Fragment>
      <h3>Component 3</h3>
      <Component4></Component4>
    </React.Fragment>
  );
}


const Component4 = () => {
  const userName = useContext(UserContext);
  console.log("Component 4");
  return (
    <React.Fragment>
      <h3>Component 4</h3>
      <h3>UserName : {userName}</h3>
    </React.Fragment>
  );
}



const UseRefComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  console.log("UseRefComponent work");
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}



const UserReducer = () => {
  // return (

  // );
}




const App = () => {

  let [count, setCount] = useState(0);
  let [num, setNum] = useState(0);
  console.log("App component work ...");

  useEffect(() => {
    console.log("UseEffect work ....");
  }, [count]);

  function increment() {
    setCount(++count);
  }

  function decrement() {
    setCount(--count);
  }

  function updateNum() {
    setNum(++num);
  }

  return (
    <div>
      <button className="btn" onClick={increment}>+</button>
      <span>{count}</span>
      <button className="btn" onClick={decrement}>-</button>
      <br/>
      <button 
        className="btn" 
        style={{marginLeft: 70}}
        onClick={updateNum}
      > Click</button>
      <Component1></Component1>
      <UseRefComponent></UseRefComponent>
    </div>
  );
}

export default App;