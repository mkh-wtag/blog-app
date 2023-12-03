import React from "react";
import { passwords } from "../Passwords";

const Login = () => {
  console.log(passwords);

  return (
    <div className="login-main">
      <h3 className="title title-3">Please login</h3>

      <form>
        <div className="form-holder">
          <label className="lebel" htmlFor="userName">
            User name
          </label>
          <input
            type="text"
            className="input-field input-login"
            id="userName"
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
          />
        </div>

        <div className="form-holder">
          <button className="button" type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
