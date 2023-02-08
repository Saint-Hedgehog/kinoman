import React from 'react';
import { CommentType } from '../../../../../types/data';
import { getRelativeDate } from '../../../../../utils';


type CommentProps = {
  comment: CommentType;
}

const Comment: React.FC<CommentProps> = ({ comment }): JSX.Element => {
  const {author, text, date, emoji} = comment;
  const commentDay = getRelativeDate(date);

  return (
    <li className="film-details__comment">
      <span className="film-details__comment-emoji">
        <img src={`./images/emoji/${emoji}.png`} width="55" height="55" alt={`emoji-${emoji}`} />
      </span>
      <div>
        <p className="film-details__comment-text">{text}</p>
        <p className="film-details__comment-info">
          <span className="film-details__comment-author">{author}</span>
          <span className="film-details__comment-day">{commentDay}</span>
          <button className="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
  );
};

export default Comment;
