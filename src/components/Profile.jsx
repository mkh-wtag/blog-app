import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { name } = useContext(UserContext);

  return (
    <div className="container">
      <h1 className="title title-1">{name}'s profile</h1>
      <p>Username: {name}</p>
    </div>
  );
};

export default Profile;
