import * as React from 'react';
import CommentMessage from './CommentMessage';
import { Comment } from '../../Types';

type CommentListProps = {
  list: Comment[];
};

export default class CommentList extends React.Component<CommentListProps> {
  constructor(props: CommentListProps) {
    super(props);
  }

  public render() {
    const { list } = this.props;
    console.log(list);
    if (list.length > 0) {
      return (
        <div>
          {list.map(comment => (
            <CommentMessage message={comment.message} key={comment.id} />
          ))}
        </div>
      );
    } else {
      return <div />;
    }
  }
}
