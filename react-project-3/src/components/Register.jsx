import React from 'react'
import { useState } from 'react'

function Register({setToggle ,setUsers}) {

const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  image: "",
});



 

const handleChange =(e)=>{
  let {name,value} = e.target
setFormData({...formData,[name]:value})
}

const submit = (e)=>{
  e.preventDefault()
  setUsers((prev) => [...prev, formData]);
  setFormData({
    name: "",
    email: "",
    password: "",
    image: "",
  });

}

  return (
    <div className="bg-white w-100 p-6 rounded-xl shadow-xl flex flex-col items-center">

      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Register
      </h1>

      <form onSubmit={submit} action="" className="flex flex-col gap-4 w-full">
        <input required value={formData.name} name="name" onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter your Name"
        />


  <input
        required  value={formData.email}  name="email"   onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter your Email"
        />

        <input required value={formData.password} name="password"  onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Enter your Password"
        />

           <input required value={formData.image} name="image"  onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          type="url"
          placeholder="Enter your image"
        />

        <button type="submit" className="bg-blue-600 p-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300">
          Register
        </button>
        
      </form>

      <p className="mt-5 text-gray-600">
        Don't have an account?{" "}
        <span onClick={() =>setToggle((prev) => !prev)} className="text-blue-600 font-semibold  hover:text-lime-600 cursor-pointer hover:underline">
          Login here
        </span>
      </p>

    </div>
  )
}

export default Register