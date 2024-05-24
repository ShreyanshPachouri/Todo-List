import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import Create from "@mui/icons-material/Create"
import { useState } from "react";

export default function TodoForm({addTodo}){

    const[text, setText] = useState(" ")

    function handleChange(evt){
        return setText(evt.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        addTodo(text)
        setText(" ")
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Add Todo" variant="outlined" onChange={handleChange} value={text}
            
            
            InputProps = {{
              endAdornment:(
              <InputAdornment position="end">
                <IconButton
                  aria-label="create-todo"
                  edge="end" type = "submit"
                >
                    <Create />
                </IconButton>
              </InputAdornment>
              ), }}
            />
            </form>
        </ListItem>
    )
}