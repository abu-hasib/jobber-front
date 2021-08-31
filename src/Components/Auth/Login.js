import React, { useState } from "react";
import { logUserIn } from "../../app/auth";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    logUserIn(email, password).then((response) => {
      const { error, message } = response.data;

      if (error) {
        setError(message);
      } else {
        props.history.push("/dashboard");
      }
      console.log("New Response!!!", response);
    });
  };

  return (
    <div
      className="absolute w-3/5 bg-white shadow-lg"
      style={{ transform: "translate(-50%, -50%)", top: "50%", left: "50%" }}
    >
      <div className="flex justify-center -mt-10">
        <img
          className="border-2 w-20 h-20 rounded-full"
          src="/assets/docs/master/image-01.jpg"
        />
      </div>
      <div className="px-12 py-10">
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 far fa-user"></i>
              <input
                type="text"
                placeholder="email"
                className="-mx-6 px-8  w-full border rounded py-1 text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
              <input
                type="text"
                placeholder="password"
                className="-mx-6 px-8 w-full border rounded py-1 text-gray-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                LOGIN
              </button>
            </div>
          </div>
          <div>{error}</div>
        </form>
      </div>
    </div>
    // <form
    //   className="flex flex-col w-full justify-between"
    //   onSubmit={(e) => handleLogin(e)}
    // >
    //   <input
    //     type="text"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button>Login</button>
    //   <div>{error}</div>
    // </form>
  );
};

export default Login;
