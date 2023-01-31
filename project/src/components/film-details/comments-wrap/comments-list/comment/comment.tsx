import React from 'react';
import { CommentType } from '../../../../../types/comment';

type CommentProps = {
  comment: CommentType;
}

const Comment: React.FC<CommentProps> = ({ comment }): JSX.Element => {
  const {src, alt, text, author, day} = comment;

  return (
    <li className="film-details__comment">
      <span className="film-details__comment-emoji">
        <img src={src} width="55" height="55" alt={alt} />
      </span>
      <div>
        <p className="film-details__comment-text">{text}</p>
        <p className="film-details__comment-info">
          <span className="film-details__comment-author">{author}</span>
          <span className="film-details__comment-day">{day}</span>
          <button className="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
  );
};

export default Comment;
