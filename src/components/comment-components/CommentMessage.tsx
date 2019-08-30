import * as React from 'react';
import Username from '../Username';
import '../bulletin-components/Bulletin.css';

type CommentMessageProps = {
  message: string;
  username: string;
  createdAt: string;
};

export default class CommentMessage extends React.Component<CommentMessageProps> {
  public render() {
    const { message, username, createdAt } = this.props;
    return (
      <div className="comment">
        <p>{message}</p>
        <Username username={username} createdAt={createdAt} />
      </div>
    );
  }
}
