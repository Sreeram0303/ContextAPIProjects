import React from 'react'
import { useTodo } from '../contexts/TodoContext'
import { useState } from 'react';
function TodoForm() {
    const [todo,setTodo] = useState();
    const {addTodo} = useTodo();

    const add = (e) =>{
        e.preventDefault();
        if(!todo) return;
        addTodo({todo:todo,completed:false})
        setTodo("")
    }
    // Here we are using the addTodo function from the useTodo hook to add the todo to the todos array.
   
    // while adding the todo we are not passing directly todo to the addTodo function because we want
    //  to add the todo in the form of an object with the todo and completed key or else it will be 
    // considered as a string.

    // we are setting the todo to an empty string after adding the todo so that the input field is cleared.Or else the todo 
    // will be added again and again.
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
export default TodoForm