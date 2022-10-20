import { useState } from "react";

const initialState = "Hello Everyone!"

function App() {
  // console.log(useState())
  const [state, setState] = useState(initialState) // observable
  const [count, setCount] = useState(0) // observable
  // const [value, dispatch] = useStateHook(intialValue)

  // const meineFunktion = function() {}

  function increment(oldValue) {
    return oldValue + 1
  }

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => { 
        console.log ('clicked')
        // state = "anderer text"
        setState("anderer text")
      }}>change text</button>
      <p>{count}</p>
      <button onClick={() => {
        setCount((currywurst) => currywurst + 1) 
        setCount((alterWert) => {
          const neuerWert = alterWert + 1
          return neuerWert
        }) 
        setCount(increment)
      }}>Increment Count</button>
    </div>
  );
}

export default App;
