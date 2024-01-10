import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(location.state);
  const [formInputs, setFormInputs] = useState({
    id: "",
    firstName: "",
    lastName: "",
    designation: "",
    favoriteFood: "",
    hobbies: "",
    bannerImage: "",
    avatar: "",
  });

  useEffect(() => {
    if (localStorage.getItem("profileData")) {
      setUserList(JSON.parse(localStorage.getItem("profileData")));
    }
  }, []);

  useEffect(() => {
    setFormInputs(currentUser);
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const convertImageToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleBannerImage = (e) => {
    const imageFile = e.target.files[0];
    convertImageToBase64(imageFile, (base64String) => {
      setFormInputs({ ...formInputs, bannerImage: base64String });
    });
  };

  const handleAvatar = (e) => {
    const imageFile = e.target.files[0];
    convertImageToBase64(imageFile, (base64String) => {
      setFormInputs({ ...formInputs, avatar: base64String });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInputs(formInputs);
    setCurrentUser(formInputs);

    const newUserList = userList.map((user) => {
      if (user.id === currentUser.id) {
        return formInputs;
      } else return user;
    });

    setUserList(newUserList);
    localStorage.setItem("profileData", JSON.stringify(newUserList));
    navigate(`/${currentUser.name}`);
  };

  const deleteFood = (food) => {
    const newFoodArray = currentUser.favoriteFood.split(",");
    const newFoodList = newFoodArray.filter(
      (existingFood) => existingFood !== food
    );
    const newFoodString = newFoodList.join();

    const updatedFood = { ...currentUser, favoriteFood: newFoodString };

    setCurrentUser(updatedFood);
    setFormInputs(updatedFood);
  };

  const deleteHobbies = (hobby) => {
    const newHobbyArray = currentUser.hobbies.split(",");
    const newHobbyList = newHobbyArray.filter(
      (existingHobbies) => existingHobbies !== hobby
    );

    const newHobbiesString = newHobbyList.join();

    const updatedHobbies = { ...currentUser, hobbies: newHobbiesString };

    setCurrentUser(updatedHobbies);
    setFormInputs(updatedHobbies);
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
                    <img
                      src={formInputs.bannerImage || "../assets/banner.jpg"}
                      alt="banner-pic"
                    />
                  </div>
                </div>

                <div className="form-holder">
                  <label htmlFor="banner">Banner image</label>
                  <input type="file" id="banner" onChange={handleBannerImage} />
                </div>
              </div>

              <div className="edit-item">
                <div className="profile-pic">
                  <img
                    src={formInputs.avatar || "../assets/profile-avatar.jpeg"}
                    alt="profile-pic"
                  />
                </div>

                <div className="center-items">
                  <div className="form-holder">
                    <label htmlFor="proPic">Profile picture</label>
                    <input type="file" id="proPic" onChange={handleAvatar} />
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
                    {formInputs?.favoriteFood &&
                      formInputs?.favoriteFood.split(",").map((food) => {
                        const getTime = new Date().getTime();

                        return (
                          <span key={`${food}-${getTime}`}>
                            {food}
                            <button
                              onClick={() => deleteFood(food)}
                              className="delete"
                              type="button"
                            >
                              <img src="../assets/close-icon.png" alt="close" />
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
                    {formInputs?.hobbies &&
                      formInputs?.hobbies.split(",").map((hobby) => {
                        const getTime = new Date().getTime();

                        return (
                          <li key={`${hobby}-${getTime}`}>
                            {hobby}
                            <button
                              className="delete"
                              type="button"
                              onClick={() => deleteHobbies(hobby)}
                            >
                              <img src="../assets/close-icon.png" alt="close" />
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
