import React, { useState } from 'react'
import './Todo.css'
import db from './firebase'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Button, Modal } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };
   
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true });
        setOpen(false);
    }

    return (
        <>
        <Modal
        open={open}
        onClose={e => setOpen(false)}
        // aria-labelledby="simple-modal-title"
        // aria-describedby='simple-modal-description'
        >
            {/* <form> */}
            <div className={classes.paper}>
                <h1>I am a modal</h1>
                <input value={input} placeholder={props.todo.todo} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        {/* </form> */}
        </Modal>
        <List className='todo_list'>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                          
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary='Deadline⏰' />
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForever onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
            {/* <Button >❌DELETE</Button> */}
            {/* <li>{props.text}</li> */}
        </List>
        </>
    )
}

export default Todo;
