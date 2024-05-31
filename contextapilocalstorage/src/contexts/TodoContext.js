import React from "react";
import { useContext,createContext } from "react";
export const TodoContext = React.createContext(
    {
        todos:[
            {
                id:1,
                todo:"todo msg",
                completed:false
            }
        ],
        addTodo : (todo) => {},
        editTodo : (id,todo) => {},
        deleteTodo:(id)=>{},
        toggleComplete:(id) =>{}

    }
);

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}

