import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './components/to-do';
function App() {
  var [x, setX] = useState(0)
  console.log('app rerendered')
  function inc() {
    return setX(() => x + 1)
  }
  function dec() {
    return setX(() => x - 1)
  }
  return (
    <div className="border border-2 border-danger p-4">
      <h2>App Component</h2>
        <h2>Counter :{x}</h2>
        <button onClick={()=>{inc()}}>Increment</button>
        <span>{' '}</span>
        <button onClick={()=>{dec()}}>Decrement</button>
      <Todo></Todo>
    </div>
  )
}
export default App;