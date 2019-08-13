import * as React from 'react';

type CommentProps = {
  message: string;
};

export default class Comment extends React.Component<CommentProps> {
  public render() {
    const { message } = this.props;
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  }
}