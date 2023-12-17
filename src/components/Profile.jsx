import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "context/UserContext";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const { name } = useContext(UserContext);
  const [userList, setUserList] = useState([]);
  const param = useParams();

  useEffect(() => {
    if (localStorage.getItem("profileData")) {
      setUserList(JSON.parse(localStorage.getItem("profileData")));
    }
  }, []);

  const currentUser = param.name === name;

  const userProfile = userList?.find(
    (thisUser) => thisUser?.name === param.name
  );

  return (
    <div className="container">
      <div key={userProfile?.id} className="profile">
        <div className="profile-banner">
          <img src="assets/banner.jpg" alt="banner-pic" />
        </div>

        <div className="profile-basic">
          <div className="profile-pic">
            <img src="assets/profile-avatar.jpeg" alt="profile-pic" />
          </div>

          <div className="profile-intro">
            <h1 className="title title-1 profile-name">
              {userProfile?.firstName} {userProfile?.lastName}
            </h1>
            <div className="profile-designation">
              Designation: {userProfile?.designation}
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
                <img src="assets/html-logo.png" alt="logo" />
                HTML
              </span>
              <span>
                <img src="assets/css-logo.png" alt="logo" />
                CSS
              </span>
              <span>
                <img src="assets/angular-logo.svg" alt="logo" />
                AngularJs
              </span>
              <span>
                <img src="assets/react-logo.png" alt="logo" />
                ReactJs
              </span>
              <span>
                <img src="assets/photoshop-logo.png" alt="logo" />
                Photoshop
              </span>
              <span>
                <img src="assets/figma-logo.png" alt="logo" />
                Figma
              </span>
              <span>
                <img src="assets/illustrator-logo.png" alt="logo" />
                Illustrator
              </span>
              <span>
                <img src="assets/ms-logo.png" alt="logo" />
                MS Office
              </span>
            </div>
          </div>

          <div className="profile-block">
            <h4 className="title title-4">Favorite Food</h4>

            <div className="skill-set">
              {userProfile?.favoriteFood.split(",").map((food) => {
                const getTime = new Date().getTime();
                return <span key={`${food}-${getTime}`}>{food}</span>;
              })}
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
              {userProfile?.hobbies.split(",").map((hobby) => {
                const getTime = new Date().getTime();
                return <li key={`${hobby}-${getTime}`}>{hobby}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
