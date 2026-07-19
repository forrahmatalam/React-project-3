import React from 'react'

function Login({setToggle}) {
  return (
    <div className="bg-white w-100 p-6 rounded-xl shadow-xl flex flex-col items-center">

      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Login
      </h1>

      <form action="" className="flex flex-col gap-4 w-full">
        <input required
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter your Email"
        />

        <input
          required className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Enter your Password"
        />

        <button className="bg-blue-600 p-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300    ">
          Login
        </button>
      </form>

      <p className="mt-5 text-gray-600">
        Don't have an account?{" "}
        <span onClick={() =>setToggle((prev) => !prev)} className="text-blue-600 font-semibold  hover:text-lime-600 cursor-pointer hover:underline">
          Register here
        </span>
      </p>

    </div>
  )
}

export default Login