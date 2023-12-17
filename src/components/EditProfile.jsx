import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { userData } from "../UserData";
import { useNavigate, useParams } from "react-router";

const EditProfile = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { name } = useContext(UserContext);
  const [formInputs, setFormInputs] = useState({
    id: "",
    userName: "",
    firstName: "",
    lastName: "",
    designation: "",
    favoriteFood: "",
    hobbies: "",
  });

  const currentUser = userData.find((user) => user.name === param.name);

  useEffect(() => {
    setFormInputs(currentUser);
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${name}`);
  };

  const deleteFood = (deletedFood) => {
    const newFoodArray = currentUser.favoriteFood.split(",");
    const newFoodList = newFoodArray.filter(
      (existingFood) => existingFood !== deletedFood
    );
    const newFoodString = newFoodList.join();

    setFormInputs({ ...currentUser, favoriteFood: newFoodString });
  };

  const deleteHobbies = (deletedHobby) => {
    const newHobbyArray = currentUser.hobbies.split(",");
    const newHobbyList = newHobbyArray.filter(
      (existingHobbies) => existingHobbies !== deletedHobby
    );

    const newHobbiesString = newHobbyList.join();

    setFormInputs({ ...currentUser, hobbies: newHobbiesString });
  };

  return (
    <div className="container">
      {currentUser && (
        <div className="profile">
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
                    value={formInputs?.firstName}
                    name="firstName"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-holder">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="input-field"
                    id="lastName"
                    value={formInputs?.lastName}
                    name="lastName"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-holder">
                  <label htmlFor="designation">Designation</label>
                  <input
                    type="text"
                    className="input-field"
                    id="designation"
                    value={formInputs?.designation}
                    name="designation"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="edit-item">
                <div className="form-holder">
                  <label htmlFor="favFood">Favorite Food</label>
                  <input
                    type="text"
                    className="input-field"
                    id="favFood"
                    placeholder="Write comma separated names"
                    name="favoriteFood"
                    value={formInputs?.favoriteFood}
                    onChange={handleChange}
                  />

                  <div className="skill-set">
                    {formInputs?.favoriteFood.split(",").map((food) => {
                      return (
                        <span key={`${food}-${new Date().getTime()}`}>
                          {food}
                          <button
                            onClick={() => deleteFood(food)}
                            className="delete"
                            type="button"
                          >
                            <img src="../close-icon.png" alt="close" />
                          </button>
                        </span>
                      );
                    })}
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
                    name="hobbies"
                    value={formInputs?.hobbies}
                    onChange={handleChange}
                  />

                  <ul className="hobbies">
                    {formInputs?.hobbies.split(",").map((hobby) => {
                      return (
                        <li key={`${hobby}-${new Date().getTime()}`}>
                          {hobby}
                          <button
                            className="delete"
                            type="button"
                            onClick={() => deleteHobbies(hobby)}
                          >
                            <img src="../close-icon.png" alt="close" />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="form-holder">
                <div className="center-items">
                  <button className="button" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
