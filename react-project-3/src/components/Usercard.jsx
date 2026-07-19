import React from "react";

function UserCard({ users }) {
  return (
    <div className="flex flex-wrap  gap-6 ">
      {users.map((user, index) => {
        return (

          <div key={index} className="p-4 bg-white flex flex-col items-center justify-center rounded-xl shadow-md">
            <img
              className="w-32 h-32 rounded-full object-cover"
              src={user.image}
              alt="user"
            />

            <h1 className="text-2xl font-bold mt-3">{user.name}</h1>

            <p className="text-gray-600">{user.email}</p>

            <button className="mt-3 bg-red-600 px-3 py-2 rounded-lg text-white hover:bg-red-700">
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default UserCard;