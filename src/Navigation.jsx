import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Navigation = () => {
  const { activeUser, setactiveUser } = useContext(UserContext);

  const handleLogout = () => {
    setactiveUser(undefined);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {activeUser ? (
        <Link onClick={handleLogout} className="nav-link" to="/">
          Logout
        </Link>
      ) : (
        <Link className="nav-link" to="/">
          Login
        </Link>
      )}

      {activeUser ? (
        <>
          <Link className="nav-link" to="/userList">
            UserList
          </Link>
          <Link className="nav-link" to={`/userProfile/${activeUser.id}`}>
            UserProfile
          </Link>
        </>
      ) : null}
    </nav>
  );
};

export default Navigation;
