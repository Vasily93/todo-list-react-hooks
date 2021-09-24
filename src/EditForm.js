import React from 'react';
import {Paper, TextField} from '@material-ui/core';
import useInputState from './hooks/useInputState';

function EditForm(props) {
    const [value, handleChange] = useInputState(props.task)
    return(
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.editTodo(value, props.id)
                props.toggle()
            }}>
                <TextField value={value}
                onChange={handleChange}
                margin='normal' 
                label='Editing'
                fullWidth
                />
            </form>
        </Paper>
    )
}

export default EditForm;