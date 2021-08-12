import React from "react";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

function UserProvider(props) {
  const [usersListData, setusersListData] = useState();
  const [activeUser, setactiveUser] = useState();
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setusersListData(data);
    };
    getUsers();
  }, []);
  return (
    <UserContext.Provider value={{ usersListData, setactiveUser, activeUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
export default UserProvider;
