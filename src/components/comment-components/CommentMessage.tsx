import * as React from 'react';
import Username from '../Username';

type CommentMessageProps = {
  message: string;
  username: string;
};

export default class CommentMessage extends React.Component<CommentMessageProps> {
  public render() {
    const { message, username } = this.props;
    return (
      <div>
        <p>Message: {message}</p>
        <Username username={username} />
        <hr />
      </div>
    );
  }
}
