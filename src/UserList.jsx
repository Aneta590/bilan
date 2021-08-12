import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { useHistory } from "react-router-dom";

const UserList = () => {
  const history = useHistory();
  const { usersListData } = useContext(UserContext);

  const handleRowClick = (user) => {
    history.push(`/userProfile/${user.id}`);
  };
  return (
    <div>
      <h1 className="text-primary">UserList</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {usersListData
            ? usersListData.map((user) => (
                <tr onClick={() => handleRowClick(user)} key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
