import logo from './logo.svg';
import './App.css';
import Todos from './components/to-do-li';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
     <Todos></Todos>
     <Counter></Counter>
    </div>
  );
}

export default App;
