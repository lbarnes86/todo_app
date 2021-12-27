import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take out the garbage', 'Complete CleverProgrammer exercises']);
  const [input, setInput] = useState('');
  console.log('🚀', input);

  const addTodo = (event) => {
    // this will fire off when button is clicked.
    event.preventDefault();
    console.log('🎯', 'YAY!!')
    setTodos([...todos, input]);
    setInput('');  // clears input after entering todo.
  }

  return (
    <div className="App">
        <h1>Hello world!</h1>
        <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <button type='submit' onClick={addTodo}>Add ToDo</button>
        </form>

        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
         
        </ul>


    </div>
  );
}

export default App;
