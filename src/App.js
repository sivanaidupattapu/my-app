import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  var [x, setX] = useState(0)
  function inc(){
   return setX(()=> x+1)
  }
  function dec(){
    return setX(()=> x-1)
  }
  return (
    <div className="border border-2 border-danger p-2">
      {
        <h2>Counter {x}</h2>
      }
      {
        <button onClick={()=>{inc()}}>Increment</button>
      }
      {
        <button onClick={()=>{dec()}}>Decrement</button>

      }
    </div>
  )
}
export default App;