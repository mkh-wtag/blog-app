import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const EditProfile = () => {
  const { name } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="container">
      <h1 className="title title-1 profile-name">Edit profile</h1>

      <div className="edit-profile">
        <form onSubmit={handleSubmit}>
          <div className="edit-item">
            <div className="form-holder">
              <div className="profile-banner">
                <img src="../5.jpg" alt="banner-pic" />
              </div>
            </div>

            <div className="form-holder">
              <label htmlFor="banner">Banner image</label>
              <input type="file" id="banner" />
            </div>
          </div>

          <div className="edit-item">
            <div className="profile-pic">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                alt="profile-pic"
              />
            </div>

            <div className="center-items">
              <div className="form-holder">
                <label htmlFor="proPic">Profile picture</label>
                <input type="file" id="proPic" />
              </div>
            </div>
          </div>

          <div className="edit-item">
            <div className="form-holder">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="input-field"
                id="firstName"
                // value={name}
              />
            </div>

            <div className="form-holder">
              <label htmlFor="lastName">Last name</label>
              <input type="text" className="input-field" id="lastName" />
            </div>

            <div className="form-holder">
              <label htmlFor="designation">Designation</label>
              <input type="text" className="input-field" id="designation" />
            </div>

            <div className="form-holder">
              <label htmlFor="favFood">Favorite Food</label>
              <input
                type="text"
                className="input-field"
                id="favFood"
                placeholder="Write comma separated names"
              />

              <div className="skill-set">
                <span>
                  Indian
                  <button className="delete" type="button">
                    <img src="./close-icon.png" alt="close" />
                  </button>
                </span>
                <span>
                  Chinese
                  <button className="delete" type="button">
                    <img src="./close-icon.png" alt="close" />
                  </button>
                </span>
                <span>
                  Continental
                  <button className="delete" type="button">
                    <img src="./close-icon.png" alt="close" />
                  </button>
                </span>
                <span>
                  English
                  <button className="delete" type="button">
                    <img src="./close-icon.png" alt="close" />
                  </button>
                </span>
                <span>
                  Bangladeshi
                  <button className="delete" type="button">
                    <img src="./close-icon.png" alt="close" />
                  </button>
                </span>
                <span>
                  Chicken biriyani
                  <button className="delete" type="button">
                    <img src="./close-icon.png" alt="close" />
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div className="edit-item">
            <div className="form-holder">
              <label htmlFor="myHobbies">My hobbies</label>
              <input
                type="text"
                className="input-field"
                placeholder="Write comma separated hobbies"
              />

              <ul className="hobbies">
                <li>
                  Listening to music
                  <button className="delete" type="button">
                    <img src="./close-icon.png" alt="close" />
                  </button>
                </li>
                <li>
                  Going to gym
                  <button className="delete" type="button">
                    <img src="./close-icon.png" alt="close" />
                  </button>
                </li>
                <li>
                  Drawing pictures
                  <button className="delete" type="button">
                    <img src="./close-icon.png" alt="close" />
                  </button>
                </li>
                <li>
                  Creating artifacts
                  <button className="delete" type="button">
                    <img src="./close-icon.png" alt="close" />
                  </button>
                </li>
                <li>
                  Playing cricket
                  <button className="delete" type="button">
                    <img src="./close-icon.png" alt="close" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="form-holder">
            <div className="center-items">
              <button className="button" type="submit">
                Submit edits
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
