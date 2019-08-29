import * as React from 'react';
import Username from '../Username';

type CommentMessageProps = {
  message: string;
  username: string;
  createdAt: string;
};

export default class CommentMessage extends React.Component<CommentMessageProps> {
  public render() {
    const { message, username, createdAt } = this.props;
    return (
      <div>
        <Username username={username} createdAt={createdAt} />
        <p>{message}</p>
        <hr />
      </div>
    );
  }
}
