import React from "react";

const Comments = () => {
  return (
    <div className="show-comment-wrapper" style={{ display: "none" }}>
      <div className="show-comments">
        <div className="comment-author">Popy:</div>
        <div className="comment">This is the first comment</div>

        <div className="write-comment">
          <div className="form-holder">
            <textarea className="input-field area" />
          </div>

          <button className="button button-sm">Post comment</button>
        </div>

        <div className="show-comments">
          <div className="comment-author">Mamun:</div>
          <div className="comment">This is the second comment</div>
        </div>

        <div className="show-comments">
          <div className="comment-author">Popy:</div>
          <div className="comment">This is the third comment</div>
        </div>
      </div>

      <div className="show-comments">
        <div className="comment-author">Arif:</div>
        <div className="comment">This is the first comment</div>

        <div className="show-comments">
          <div className="comment-author">Mitu:</div>
          <div className="comment">This is the second comment</div>
        </div>

        <div className="show-comments">
          <div className="comment-author">Sumi:</div>
          <div className="comment">This is the third comment</div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
