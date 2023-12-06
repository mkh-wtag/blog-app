import React, { useContext, useState } from "react";
import { userData } from "../Passwords";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setIsLoggedIn } = useContext(UserContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedIn = userData.find(
      (user) => user.name === name && user.password === password
    );

    if (loggedIn) {
      navigate("/dashboard");
      setIsLoggedIn(true);
      localStorage.setItem("name", name);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
