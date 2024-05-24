
import { useEffect, useState} from "react";
import List from '@mui/material/List';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";


const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
  };

export default function TodoList(){
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const removeTodo = (id) => (
        setTodos((prevTodos) => (
            prevTodos.filter((todo) => todo.id !== id)
        ))
    )

    const addTodos = (text) => (
        setTodos(prevTodos => (
            [... prevTodos, {text: text, id: crypto.randomUUID(), completed: false}]
        ))
    )
    const toggleTodo = (id) => (
        setTodos(prevTodos => (
            prevTodos.map((todo) => {
                if(todo.id === id){
                    return {...todo, completed: !todo.completed}
                }
                else{
                    return todo;
                }
            }
        ))
    )
)

    return (
        <List sx = {{width: "100%" , maxWidth: 360, bgcolor: "grey"}}>
            {
                todos.map((todo) => (
                     <TodoItem todo = {todo} key = {todo.id} removeTodo = {() => removeTodo(todo.id)} toggle = {() => toggleTodo(todo.id)} ></TodoItem>
                ))
            }
            <TodoForm addTodo = {addTodos} />
            </List>
          )
        }