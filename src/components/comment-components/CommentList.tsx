import * as React from 'react';
import CommentMessage from './CommentMessage';
import { Comment } from '../../Types';
import './Comment.css';

type CommentListProps = {
  list: Comment[];
};

export default class CommentList extends React.Component<CommentListProps> {
  public render() {
    const { list } = this.props;
    if (list.length > 0) {
      return (
        <div className="commentList">
          {list.map(comment => (
            <CommentMessage
              message={comment.message}
              username={comment.username}
              createdAt={comment.createdAt}
              key={comment.id}
            />
          ))}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
