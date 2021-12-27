import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take out the garbage', 'Complete CleverProgrammer exercises']);

  return (
    <div className="App">
        <h1>Hello world!</h1>
        <input />
        <button>Add ToDo</button>

        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
         
        </ul>


    </div>
  );
}

export default App;
