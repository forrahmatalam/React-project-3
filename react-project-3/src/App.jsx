import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { useState } from 'react'
import UserCard from './components/UserCard'


function App() {

  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);
  return (

    <div className = "bg-gray-400  flex items-center p-8 gap-5 justify-space-between min-h-screen ">
     {toggle ? <Login  setToggle={setToggle} /> :<Register setToggle={setToggle} setUsers={setUsers}/>}
     <UserCard users={users} />
    </div>

  )
}

export default App