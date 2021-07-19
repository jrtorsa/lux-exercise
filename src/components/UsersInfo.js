import React from "react";

const UsersInfo = ({ users, visible }) => {
  return (
    <>
      {visible ? (
        <>
          <h1>Users Info: </h1>
          {users.map((user) => (
            <ul key={user.id}>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.phone}</li>
            </ul>
          ))}
        </>
      ) : (
        <h2>Click on the left to see the Info...</h2>
      )}
    </>
  );
};

export default UsersInfo;
