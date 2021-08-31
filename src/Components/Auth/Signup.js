import React, { useState } from "react";
import { signUserUp } from "../../app/auth";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();

    signUserUp(email, password, confirmPassword).then((response) => {
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
      className="absolute w-5/12 h-2/6 bg-white shadow-lg"
      style={{ transform: "translate(-50%, -50%)", top: "50%", left: "50%" }}
    >
      <div className="px-12 py-10">
        <form className="flex flex-col " onSubmit={(e) => handleSignup(e)}>
          <div>
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
            <div className="w-full mb-2">
              <div className="flex items-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
                <input
                  type="text"
                  placeholder="confirm password"
                  className="-mx-6 px-8 w-full border rounded py-1 text-gray-700"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mt-auto flex justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span className="text-xs text-gray-700">Remember Me</span>
            </div>
            <div>
              <button
                type="text"
                className="bg-yellow-400 text-xs text-gray-700 rounded px-4 py-2"
              >
                Signup
              </button>
            </div>
          </div>
          <div>{error}</div>
        </form>
      </div>
    </div>
    // <form
    //   className="flex flex-col justify-between"
    //   onSubmit={(e) => handleLogin(e)}
    // >
    //   <input
    //     className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    //     type="text"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <input
    //     className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    //     type="text"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <input
    //     className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    //     type="text"
    //     value={confirmPassword}
    //     onChange={(e) => setConfirmPassword(e.target.value)}
    //   />
    //   <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
    //     Signup
    //   </button>
    //   <div>{error}</div>
    // </form>
  );
};

export default Signup;
