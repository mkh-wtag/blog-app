import { UserContext } from "context/UserContext";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const ChatComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userList, setUserList] = useState([]);
  const { name } = useContext(UserContext);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    if (localStorage.getItem("profileData")) {
      setUserList(JSON.parse(localStorage.getItem("profileData")));
    }
  }, []);

  return (
    <div className="chat-component">
      <div className="chat-logo" onClick={toggleChat}>
        <img src="assets/chat.png" alt="chat logo" />
      </div>

      {isChatOpen && (
        <div className="user-list-wrapper">
          <button className="delete-post" onClick={toggleChat}>
            +
          </button>

          <ul className="user-list">
            <li>
              <h4 className="title title-4">User list</h4>
            </li>

            {userList.map((user) => (
              <li
                key={user.id}
                className={name === user.name ? "active" : null}
              >
                {name ? (
                  <Link to={`/${user.name}`}>{user.name}</Link>
                ) : (
                  <Link to="/login">{user.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
