import React from 'react';
import {Paper, TextField, Button} from '@material-ui/core';
import useInputState from './hooks/useInputState';

function TodoForm(props) {
    const [value, handleChange, reset] = useInputState('');
    return(
        <Paper>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.addTodo(value);
                reset()
            }}>
                <TextField value={value}  onChange={handleChange} />
            </form>
        </Paper>
    )
}

export default TodoForm;