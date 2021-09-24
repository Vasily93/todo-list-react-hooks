import React from 'react';
import {TextField} from '@material-ui/core';
import useInputState from './hooks/useInputState';

function EditForm(props) {
    const [value, handleChange] = useInputState(props.task)
    return(
            <form onSubmit={(e) => {
                e.preventDefault()
                props.editTodo(value, props.id)
                props.toggle()
                }}
                style={{margin: '1rem 0', width: '50%'}}
            >
                <TextField value={value}
                onChange={handleChange}
                margin='normal' 
                label='Editing'
                fullWidth
                autoFocus
                />
            </form>
    )
}

export default EditForm;