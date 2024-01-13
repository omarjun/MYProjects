import { useState } from 'react'
import logo from "./assets/logo.png"
import './App.css'

function App() {
  const [login,setlogin]=useState(true)

  const toggleSwitch = () => {
    setlogin(!login)
  }
  return (
    
<>
  <div id="Container" className="flex justify-center items-center h-screen">
    <div id="user" className="flex flex-col w-300 p-5 h-300 items-center justify-center text-center border border-gray-400 rounded gap-5">
      <img
        src={logo}
        alt=""
        className="mb-2 w-220 blend-multiply mx-auto pb-5"
      />
      <input
        className="p-left h-30 px-2 border rounded bg-gray-250 text-black placeholder-gray-400"
        type="text"
        hidden={login}
        placeholder="Phone or email"
      />
      <input
        className="h-30 px-2 border rounded bg-gray-250 text-black placeholder-gray-400"
        type="text"
        hidden={login}
        placeholder="Full Name"
      />
      <input
        className="h-30 px-2 border rounded bg-gray-250 text-black placeholder-gray-400"
        type="text"
        placeholder="Phone, username, or email"
      />
      <input
        className="h-30 px-2 border rounded bg-gray-250 text-black placeholder-gray-400"
        type="password"
        placeholder="Password"
      />
      <button className="h-30 px-2 bg-blue-500 text-white rounded">
        {login ? "Sign In" : "Sign Up"}
      </button>
      <div id="footer" className="pt-5">
        {login ? "Don't have an Account?" : "Create an Account"}{" "}
        <span
          className="cursor-pointer text-blue-500"
          onClick={toggleSwitch}
        >
          {login ? "Sign Up" : "Log In"}
        </span>
      </div>
    </div>
  </div>
</>

  )
}

export default App
