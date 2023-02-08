import React from 'react';
import { Data } from '../../../types/data';
import CommentsList from './comments-list/comments-list';
import NewComment from './new-comment/new-comment';

type CommentsWrapProps = {
  films: Data;
}

const CommentsWrap: React.FC<CommentsWrapProps> = ({ films }): JSX.Element => {
  const { comments } = films[0];

  return (
    <section className="film-details__comments-wrap">
      <h3 className="film-details__comments-title">Comments <span className="film-details__comments-count">{comments.length}</span></h3>
      <CommentsList comments={comments}/>
      <NewComment />
    </section>
  );
};

export default CommentsWrap;
