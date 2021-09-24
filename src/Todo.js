import React from 'react';
import EditForm from './EditForm.js';
import {
    ListItem,
    ListItemText,
    Divider,
    Checkbox,
    IconButton,
    ListItemSecondaryAction,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import useToggle from './hooks/useToggleState';

function Todo({task, completed, removeTodo, id, toggleCompleted, editTodo}) {
    const [isEditing, toggle] = useToggle()
    return (
        <>
        <ListItem>
            {isEditing ? 
            (<EditForm task={task} toggle={toggle} id={id} editTodo={editTodo}/>)
            :
            (<> 
            <Checkbox checked={completed} onClick={() => toggleCompleted(id)} />
            <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete'
                    onClick={() => {
                        removeTodo(id)
                    }}>
                    <Delete />
                </IconButton>
                <IconButton  aria-label='Edit' onClick={() => toggle(isEditing)}>
                    <Edit />
                </IconButton>
            </ListItemSecondaryAction>
            </>)
            }
        </ListItem>
        <Divider/>
        </>
    )
}

export default Todo;