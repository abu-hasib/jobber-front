import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/signup">
        Signup
      </NavLink>
      <NavLink activeClassName="active" to="/login">
        Login
      </NavLink>
      <small>(Access without token only)</small>
      <NavLink activeClassName="active" to="/dashboard">
        Dashboard
      </NavLink>
      <small>(Access with token only)</small>
    </div>
  );
};

export default Navigation;
