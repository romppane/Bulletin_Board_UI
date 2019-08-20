import * as React from 'react';

type CommentMessageProps = {
  message: string;
};

export default class CommentMessage extends React.Component<CommentMessageProps> {
  public render() {
    const { message } = this.props;
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  }
}
