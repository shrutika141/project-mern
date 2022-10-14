import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import { Userdetails } from './Services/UserService'

const App = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    Userdetails()
      .then((result) => {
        console.log(result)
        setUser(result)
      })
      .catch((err) => console.log(err));
  }, [!user]);
  

  return (
    <div>
     <Routes>
      <Route path="/" element={<Login />} />        
      <Route path="/Signup" element = {<Signup />} />        
      <Route path="/dashboard" element={<Dashboard user={user} />} />        
    </Routes>
    </div>
  )
}

export default App