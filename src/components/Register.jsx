import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-main">
      <h3 className="title title-3">Please register here</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-holder">
          <label className="lebel" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="input-field input-login"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-holder">
          <label className="lebel" htmlFor="userName">
            User name
          </label>
          <input
            type="text"
            className="input-field input-login"
            id="userName"
            name="userName"
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
            name="password"
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

export default Register;
