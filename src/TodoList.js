import React from 'react';
import {Paper, List} from '@material-ui/core';
import Todo from './Todo';

function TodoList(props) {
    return(
        <Paper>
            <List>
            {props.todos.map(todo => (
                <Todo key={todo.id}
                    id={todo.id} 
                    task={todo.task} 
                    completed={todo.completed} 
                    removeTodo={props.removeTodo}
                    toggle={props.toggleCompleted}
                />
            ))}    
            </List>
        </Paper>
    )
}

export default TodoList;