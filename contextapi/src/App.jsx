import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider >
        <Login />
        <Profile/>
    </UserContextProvider>
  )
}

export default App
