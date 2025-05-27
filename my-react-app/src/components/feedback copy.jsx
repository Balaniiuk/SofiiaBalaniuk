import React, { useState } from 'react';
import './feedback.css';
import user from "../assets/images/User.png";

const Feedback = () => {
  const [comments, setComments] = useState([]);
  const [userName, setUserName] = useState('');
  const [userComment, setUserComment] = useState('');

  const handlePublish = () => {
    if (userName.trim() && userComment.trim()) {
      setComments([...comments, { name: userName, comment: userComment }]);
      setUserName('');
      setUserComment('');
    }
  };

  const isButtonEnabled = userName.trim() && userComment.trim();

  return (
    <section id="feedback" className="feedback">
      <div className="container">
        <div className="head">
          <h2>POST A COMMENT</h2>
          <div className="alltogether">
            <div className="emty">
              <div id="comment" className="comment">
                <span>{comments.length}</span> Comments
              </div>
              <div className="text">
                <p>We are happy to hear from you</p>
              </div>
              <div className="comments">
                {comments.map((item, index) => (
                  <div key={index} className="comment-item">
                    <strong>{item.name}:</strong> {item.comment}
                  </div>
                ))}
              </div>
            </div>

            <div className="img-n-form">
              <div className="commentbox">
                <img src={user} alt="user" />
              </div>

              <div className="form">
                <div className="content">
                  <p>Comment as:</p>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    className="user"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="commentinput">
                  <input
                    type="text"
                    placeholder="Enter your comment..."
                    className="usercomment"
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                  />
                  <div className="bottom-bar">
                    <div className="buttons">
                      <button
                        type="submit"
                        id="publish"
                        className={`publish-button ${isButtonEnabled ? 'abled' : ''}`}
                        onClick={handlePublish}
                        disabled={!isButtonEnabled}
                      >
                        PUBLISH
                      </button>
                    </div>
                  </div>
                </div>

                <p className="policy">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="">privacy policy</a> and <a href="">Terms of Service</a> apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;