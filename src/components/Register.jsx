import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nagivate = useNavigate();
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [formInputs, setFormInputs] = useState({
    id: new Date().getTime(),
    name: "",
    firstName: "",
    password: "",
  });

  // let savedProfiles = [formInputs];
  useEffect(() => {
    if (localStorage.getItem("profileData")) {
      setSavedProfiles(JSON.parse(localStorage.getItem("profileData")));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isProfileExists = savedProfiles?.some(
      (profile) => profile.name === formInputs.name
    );

    isProfileExists &&
      alert(
        `${formInputs.name} already exists. Please choose a different username`
      );

    const updatedProfiles = [...savedProfiles, formInputs];

    !isProfileExists && setSavedProfiles(updatedProfiles);
    localStorage.setItem("profileData", JSON.stringify(updatedProfiles));
    !isProfileExists && nagivate("/login");
  };

  return (
    <div className="login-main">
      <h3 className="title title-3">Please register here</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-holder">
          <label className="lebel" htmlFor="name">
            User name
          </label>
          <input
            type="text"
            className="input-field input-login"
            id="name"
            name="name"
            required
            value={formInputs.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-holder">
          <label className="lebel" htmlFor="name">
            First name
          </label>
          <input
            type="text"
            className="input-field input-login"
            id="firstName"
            name="firstName"
            required
            value={formInputs.firstName}
            onChange={handleChange}
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
            required
            value={formInputs.password}
            onChange={handleChange}
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
