import React from "react";

const UsersList = ({ users, showInfo }) => {
  return (
    <>
      <h1>Users</h1>
      {users.map((user) => (
        <ul key={user.id}>
          <li style={{ cursor: "pointer" }} onClick={() => showInfo(user.id)}>
            {user.username}
          </li>
        </ul>
      ))}
    </>
  );
};

export default UsersList;
