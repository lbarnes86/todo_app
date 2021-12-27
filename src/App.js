import React, { useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Todo from './Todo';

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
        <FormControl>
          <InputLabel>✏️Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} type='submit' onClick={addTodo} variant='contained' color='primary' >
          Add Todo
        </Button>
        {/* <button type='submit' onClick={addTodo}>Add ToDo</button> */}
        </form>

        <ul>
          {todos.map(todo => (
            <Todo text={todo}/>
            // <li>{todo}</li>
          ))}
         
        </ul>


    </div>
  );
}

export default App;
