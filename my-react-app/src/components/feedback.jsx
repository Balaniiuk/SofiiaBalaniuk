import React, { useState, useEffect } from 'react';
import './feedback.css';
import userIcon from "../assets/images/User.png";
import { onAuthStateChanged } from 'firebase/auth';
import { createComment, loadComments, auth } from './firebase';
import { Link } from 'react-router-dom';

const Feedback = () => {
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Відстеження автентифікації користувача
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    loadComments(setComments, setLoading);
    return () => unsubscribe();
  }, []);

  const handlePublish = async () => {
    if (userComment.trim() && currentUser) {
      const newComment = {
        email: currentUser.email,
        comment: userComment.trim(),
      };

      await createComment(newComment);

      setComments([...comments, newComment]);
      setUserComment('');
    }
  };

  const isButtonEnabled = userComment.trim().length > 0;

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
                {loading ? (
                  <p>Loading comments...</p>
                ) : comments.length > 0 ? (
                  comments.map((item, index) => (
                    <div key={index} className="comment-item">
                      <strong>{item.email}:</strong> {item.comment}
                    </div>
                  ))
                ) : (
                  <p>No comments yet.</p>
                )}
              </div>
            </div>

            <div className="img-n-form">
              <div className="commentbox">
                <img src={userIcon} alt="user" />
              </div>

              <div className="form">
                {currentUser ? (
                  <>
                    <div className="content">
                      <p>Comment as: <strong>{currentUser.email}</strong></p>
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
                  </>
                ) : (
                  <div className="not-logged-in">
                    <p>Please <Link to="/login">log in</Link> to leave a comment.</p>
                  </div>
                )}

                <p className="policy">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="#">privacy policy</a> and <a href="#">Terms of Service</a> apply.
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