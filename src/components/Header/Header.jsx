import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user , logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error.message))
  }

  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl logo">
          AUTH MASTER
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user ? (
          <>
            {user.email}
            <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
