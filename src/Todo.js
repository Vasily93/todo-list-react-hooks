import React from 'react';
import {
    ListItem,
    ListItemText,
    Divider,
    Checkbox,
    IconButton,
    ListItemSecondaryAction,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

function Todo({task, completed, removeTodo, id, toggle}) {

    return (
        <>
        <ListItem>
            <Checkbox checked={completed} onClick={() => toggle(id)} />
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
                <IconButton  aria-label='Edit'>
                    <Edit />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <Divider/>
        </>
    )
}

export default Todo;