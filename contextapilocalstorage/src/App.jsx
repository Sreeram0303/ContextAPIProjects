import { useEffect, useState } from "react"
import { useTodo } from "./contexts/TodoContext"
import { TodoProvider } from "./contexts/TodoContext"
import TodoForm from "./Components/TodoForm"
import TodoItem from "./Components/TodoItem"

export default function App() {
  const [todos,setTodos] = useState([]);
// Here we are keeping the default value of todos as an empty array so that we can add todos to it later on and avoid errors like undefined.
  const addTodo = (todo) => {
    setTodos((prevTodo)=>[{id:Date.now(),...todo},...prevTodo])
  }

  const deleteTodo = (id) => {
    setTodos((prevTodo) => (prevTodo.filter((todo) => (todo.id !== id))))
  }

  const editTodo = (todo,id) => {
      setTodos((prevTodos) => (prevTodos.map((prev) => (prev.id === id ? todo : prev))))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) => (prevTodos.map((prev) => (prev.id === id ? {...prev,completed: !prev.completed}   : prev))))
  }
// Now we are gonan start working on local storage
// The only issue with local storage is that it can only store strings so we need to convert our todos array to string and then store it in local storage.
  // we can directly access the localStorage object in the browser unless we are using a server side rendering framework like Next.js 
  
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  // The reason that we are using 2 useEffects is that we want to load the todos from local storage when the component mounts and then 
  // we want to save the todos to local storage whenever the todos array changes.
  //  We could've done in the single useEffect but that would fetch the todos from local storage whenever the todos array changes which is not necessary.
  return (
    <TodoProvider value={{todos,addTodo,editTodo,deleteTodo,toggleComplete}}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                  <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}