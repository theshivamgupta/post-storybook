import React from "react";
import PropTypes from "prop-types";
import colors from "./assets/colors.svg";
import like from "./assets/like.svg";
import "./post.css";

export function Post() {
  return (
    <div>
      <div className="container">
        <div className="image-container">
          <img src={colors} alt="color" />
        </div>
        <div className="content-container">
          <div className="title-container">
            Easy, Short, Concise and Fast Java DFS 3 ms solution
          </div>
          <div className="time-container">
            created at: January 21, 2016 7:59 AM | Last Reply: vk927 March 1,
            2021 9:49 PM
          </div>
        </div>
        <div className="like-container">
          <img src={like} alt="like" className="image" />
          <span>100 likes</span>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={colors} alt="color" />
        </div>
        <div className="content-container">
          <div className="title-container">
            Easy, Short, Concise and Fast Java DFS 3 ms solution
          </div>
          <div className="time-container">
            created at: January 21, 2016 7:59 AM | Last Reply: vk927 March 1,
            2021 9:49 PM
          </div>
        </div>
        <div className="like-container">
          <img src={like} alt="like" className="image" />
          <span>100 likes</span>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={colors} alt="color" />
        </div>
        <div className="content-container">
          <div className="title-container">
            Easy, Short, Concise and Fast Java DFS 3 ms solution
          </div>
          <div className="time-container">
            created at: January 21, 2016 7:59 AM | Last Reply: vk927 March 1,
            2021 9:49 PM
          </div>
        </div>
        <div className="like-container">
          <img src={like} alt="like" className="image" />
          <span>100 likes</span>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Post.defaultProps = {
  user: null,
};
