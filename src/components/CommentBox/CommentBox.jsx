import React, { useState } from "react";
import "./CommentBox.css";
import close from "../assets/close.svg";
import avatar from "../assets/profile_pic.png";

const CommentBox = ({ toggleVisibility, isCommentBoxVisible }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div
      className={`${
        isCommentBoxVisible ? "commentBox--visible" : "commentBox"
      }`}
    >
      <div className="commentBox_header">
        <h2 className="commentBox_header-head">Responses</h2>
        <img className="commentBox_header-closeButton" onClick={toggleVisibility} src={close} alt="" />
      </div>
      <div className="commentBox__form">
        <div className="commentBox__form-user">
          <img className="commentBox__form-user__avatar" src={avatar} alt="" />
          <p className="commentBox__form-user__name">username</p>
        </div>
        <div className="commentBox__input">
          <input type="text" placeholder="What are your thoughts?"/>
        </div>
        <div className="commentBox__cta">
          <a className="commentBox__cta-cancel">Cancel</a>
          <a className="commentBox__cta-submit">Respond</a>
        </div>
      </div>
      <div className="commentBox__comments">
          <div className="commentBox__comment">
            <div className="commentBox__comment-header">
              <img className="commentBox__comment-header__avatar" src={avatar}/>
              <div className="commentBox__comment-header__details">
                <p className="commentBox__comment-header__details-name">Aswin dev</p>
                <p className="commentBox__comment-header__details-time">1 hour ago</p>
              </div>
            </div>
              <div className="commentBox__comment-content">
                <p className="commentBox__comment-content__p">
                There’s something almost poetic about the notion of data being 'processed and then forgotten.' It’s reminiscent of ancient philosophies about living in the moment, applied to the digital realm. This stateless, isolated processing paints a picture 
                </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default CommentBox;
