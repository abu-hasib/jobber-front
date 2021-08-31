import React, { useState } from "react";
import { logUserIn } from "../../app/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const result = logUserIn(email, password).then((response) =>
      console.log("New Response!!!", response)
    );
  };

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
