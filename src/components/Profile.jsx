import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useParams } from "react-router-dom";
import { userData } from "../UserData";

const Profile = () => {
  const { name } = useContext(UserContext);
  const [userList] = useState(userData);
  const param = useParams();

  const currentUser = param.name === name;

  const userProfile = userList.find(
    (thisUser) => thisUser?.name === param.name
  );

  const { id, firstName, lastName, designation, favoriteFood, hobbies } =
    userProfile;

  return (
    <div className="container">
      <div key={id} className="profile">
        <div className="profile-banner">
          <img src="../5.jpg" alt="banner-pic" />
        </div>

        <div className="profile-basic">
          <div className="profile-pic">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
              alt="profile-pic"
            />
          </div>

          <div className="profile-intro">
            <h1 className="title title-1 profile-name">
              {firstName} {lastName}
            </h1>
            <div className="profile-designation">
              Designation: {designation}
            </div>
          </div>

          {currentUser && (
            <Link className="button" to={`/edit-profile/${name}`}>
              Edit Profile
            </Link>
          )}
        </div>

        <div className="profile-body">
          <div className="profile-block">
            <h4 className="title title-4">My Skills</h4>
            <div className="skill-set">
              <span>
                <img src="./html-logo.png" alt="logo" />
                HTML
              </span>
              <span>
                <img src="./css-logo.png" alt="logo" />
                CSS
              </span>
              <span>
                <img src="./angular-logo.svg" alt="logo" />
                AngularJs
              </span>
              <span>
                <img src="./react-logo.png" alt="logo" />
                ReactJs
              </span>
              <span>
                <img src="./photoshop-logo.png" alt="logo" />
                Photoshop
              </span>
              <span>
                <img src="./figma-logo.png" alt="logo" />
                Figma
              </span>
              <span>
                <img src="./illustrator-logo.png" alt="logo" />
                Illustrator
              </span>
              <span>
                <img src="./ms-logo.png" alt="logo" />
                MS Office
              </span>
            </div>
          </div>

          <div className="profile-block">
            <h4 className="title title-4">Favorite Food</h4>

            <div className="skill-set">
              {favoriteFood.split(",").map((food) => (
                <span key={`${food}-${new Date().getTime()}`}>{food}</span>
              ))}
            </div>
          </div>

          <div className="profile-block">
            <h4 className="title title-4">Activity Details</h4>

            <div className="activity-details">
              <span>100 likes</span>
              <span>30 comments</span>
              <span>200 friends</span>
              <span>20 notifications</span>
              <span>120 following</span>
              <span>50 followers</span>
            </div>
          </div>

          <div className="profile-block">
            <h4 className="title title-4">My Hobbies</h4>

            <ul className="hobbies">
              {hobbies.split(",").map((hobby) => (
                <li key={`${hobby}-${new Date().getTime()}`}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
