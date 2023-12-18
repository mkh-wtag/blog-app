import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // const [formInputs, setFormInputs] = useState({
  //   id: "",
  //   userName: "",
  //   firstName: "",
  //   lastName: "",
  //   designation: "",
  //   favoriteFood: "",
  //   hobbies: "",
  // });

  const savedProfiles = JSON.parse(localStorage.getItem("profileData"));

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
            name="password"
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

export default Register;
