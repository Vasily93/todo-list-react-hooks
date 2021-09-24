import React, {useState} from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import {v4 as uuid4} from 'uuid';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

function TodoApp(prpos) {
    const [todos, setTodos] = useState([]);

    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuid4(), task: newTodoText, completed: false }])
    }

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }

    const toggleCompleted = todoId => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
            );
        setTodos(updatedTodos)
        //changes the state but doesn't refresh the todo list
    }

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
            <Grid container  justifyContent="center" style={{margonTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleCompleted={toggleCompleted}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;