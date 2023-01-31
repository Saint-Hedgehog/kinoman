import CommentsList from './comments-list/comments-list';
import NewComment from './new-comment/new-comment';

const CommentsWrap: React.FC = (): JSX.Element => (
  <section className="film-details__comments-wrap">
    <h3 className="film-details__comments-title">Comments
      <span className="film-details__comments-count">4</span>
    </h3>
    <CommentsList />
    <NewComment />
  </section>
);

export default CommentsWrap;
