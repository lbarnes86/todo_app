import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Todo from './Todo.js';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  // console.log('🚀', input);
// when app loads, we need to listen to database and fetch new todos as they get added/removed
 useEffect(() => {
  // fires when app.js loads
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc =>({id: doc.id, todo: doc.data().todo})))
  })
 }, []);

  const addTodo = (event) => {
    // this will fire off when button is clicked.
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // console.log('🎯', 'YAY!!')
    // setTodos([...todos, input]);
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
            <Todo todo={todo}/>
            // <li>{todo}</li>
          ))}
         
        </ul>


    </div>
  );
}

export default App;
