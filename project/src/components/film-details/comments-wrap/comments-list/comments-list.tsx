import { comments } from '../../../../mock/comment';
import Comment from './comment/comment';

const CommentsList: React.FC = (): JSX.Element => (
  <ul className="film-details__comments-list">
    {
      comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))
    }
  </ul>
);

export default CommentsList;
