import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "context/UserContext";

const Login = () => {
  const { setName } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let savedProfile = [];

  if (localStorage.getItem("profileData")) {
    savedProfile = JSON.parse(localStorage.getItem("profileData"));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedIn = savedProfile.some(
      (user) => user.name === userName && user.password === password
    );

    if (loggedIn) {
      localStorage.setItem("name", userName);
      setName("");
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-main">
      <h3 className="title title-3">Please login</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-holder">
          <label className="lebel" htmlFor="userName">
            Username
          </label>
          <input
            type="text"
            className="input-field input-login"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="form-holder">
          <label className="lebel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="input-field input-login"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-holder">
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
