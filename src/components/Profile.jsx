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
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
                  alt="logo"
                />
                HTML
              </span>
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
                  alt="logo"
                />
                CSS
              </span>
              <span>
                <img
                  src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
                  alt="logo"
                />
                AngularJs
              </span>
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                  alt="logo"
                />
                ReactJs
              </span>
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png"
                  alt="logo"
                />
                Photoshop
              </span>
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
                  alt="logo"
                />
                Figma
              </span>
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png"
                  alt="logo"
                />
                Illustrator
              </span>
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg/1728px-Microsoft_Office_logo_%282013%E2%80%932019%29.svg.png"
                  alt="logo"
                />
                MS Office
              </span>
            </div>
          </div>

          <div className="profile-block">
            <h4 className="title title-4">Favorite Food</h4>

            <div className="skill-set">
              {favoriteFood.split(",").map((food) => (
                <span key={food}>{food}</span>
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
                <li key={hobby}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
