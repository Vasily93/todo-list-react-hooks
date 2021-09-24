import React, {useState, useEffect} from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import {v4 as uuid4} from 'uuid';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || [];
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

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
    }

    const editTodo = (task, id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? {...todo, task: task} : todo      
        );
        setTodos(updatedTodos)
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
                    <TodoList todos={todos} 
                    removeTodo={removeTodo}
                    toggleCompleted={toggleCompleted}
                    editTodo={editTodo}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;