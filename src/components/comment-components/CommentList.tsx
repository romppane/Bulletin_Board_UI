import * as React from 'react';
import CommentMessage from './CommentMessage';
import { Comment } from '../../Types';

type CommentListProps = {
  list: Comment[];
};

export default class CommentList extends React.Component<CommentListProps> {
  public render() {
    const { list } = this.props;
    if (list.length > 0) {
      return (
        <div>
          {list.map(comment => (
            <CommentMessage
              message={comment.message}
              username={comment.username}
              key={comment.id}
            />
          ))}
        </div>
      );
    } else {
      return <div />;
    }
  }
}
