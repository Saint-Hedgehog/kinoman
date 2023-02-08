import React from 'react';
import { Comments } from '../../../../types/data';
import Comment from './comment/comment';

type CommentsListProps = {
  comments: Comments;
}

const CommentsList: React.FC<CommentsListProps> = ({comments}): JSX.Element => (
  <ul className="film-details__comments-list">
    {
      comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))
    }
  </ul>
);

export default CommentsList;
