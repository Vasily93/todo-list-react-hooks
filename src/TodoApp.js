import React, {useState} from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import TodoList from './TodoList.js';

function TodoApp(prpos) {
    const initialTodos = [
        {id:1, task: 'start coding', completed: true},
        {id:2, task: 'code for 5 hours', completed: false},
        {id:3, task: 'finish todo list porject', completed: false}
    ];
    const [todos, setTodos] = useState(initialTodos);
    return(
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh", 
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{height: '64px'}}>
                <Toolbar>
                    <Typography color='inherit'>ToDos with React Hooks</Typography>
                </Toolbar>
            </AppBar>
            <TodoList todos={todos}/>
        </Paper>
    )
}

export default TodoApp;