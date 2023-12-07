import React, { useContext, useState } from "react";
import { userData } from "../Passwords";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setName } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedIn = userData.some(
      (user) => user.name === userName && user.password === password
    );

    if (loggedIn) {
      localStorage.setItem("name", userName);
      navigate("/dashboard");
      setName("");
    }
  };

  return (
    <div className="login-main">
      <h3 className="title title-3">Please login</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-holder">
          <label className="lebel" htmlFor="userName">
            User name
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
