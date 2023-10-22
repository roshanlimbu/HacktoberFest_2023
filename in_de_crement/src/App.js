
import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h1>{num}</h1>
      <p>
        <button onClick={() => setNum(num + 1)}>Increment</button>
        <button onClick={() => setNum(num - 1)}>Decrement</button>
      </p>
    </div>
  );
}

export default App;
