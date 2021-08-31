import React, { useState } from "react";
import { createProfile } from "../../app/user";

const Profile = (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(null);

  const handleProfileCreate = (e) => {
    e.preventDefault();

    createProfile(name, gender).then((response) => {
      const { error, message } = response.data;

      if (error) {
        setError(message);
      } else {
      }
      console.log("New Response!!!", response);
    });
  };
  return (
    <div className="container mx-auto px-12 py-24">
      <h1 className="font-semibold text-3xl tracking-tight mb-10">
        Create Profile
      </h1>
      <form className="w-full" onSubmit={(e) => handleProfileCreate(e)}>
        <div className="w-full mb-2">
          <div className="flex items-center">
            <i className="ml-3 fill-current text-gray-400 text-xs z-10 far fa-user"></i>
            <input
              type="text"
              placeholder="full name"
              className="-mx-6 px-8  w-full border rounded py-1 text-gray-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full mb-2">
          <div className="flex items-center">
            <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
            <input
              type="text"
              placeholder="gender"
              className="-mx-6 px-8 w-full border rounded py-1 text-gray-700"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-8 flex justify-between">
          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4 mr-2" />
            <span className="text-xs text-gray-700">Remember Me</span>
          </div>
          <div>
            <button
              type="text"
              className="bg-yellow-400 text-xs text-gray-700 rounded px-4 py-2"
            >
              Create
            </button>
          </div>
        </div>
        <div>{error}</div>
      </form>
    </div>
  );
};

export default Profile;
