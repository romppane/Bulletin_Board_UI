import * as React from 'react';
import { createComment } from '../../utility/Data-fetcher';
import { Comment } from '../../Types';

type CommentSubmitProps = {
  userId: number;
  postId: number;
  callback: Function;
};

type CommentSubmitState = {
  message: string;
  username: string;
};

export default class CommentSubmit extends React.Component<CommentSubmitProps, CommentSubmitState> {
  constructor(props: CommentSubmitProps) {
    super(props);

    this.state = {
      message: '',
      username: ''
    };
  }

  callCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    const { userId, postId, callback } = this.props;
    const { message, username } = this.state;
    e.preventDefault();
    await createComment({ userId, postId, message, username } as Comment);
    this.setState({ message: '', username: '' });
    callback();
  };

  public render() {
    const { message, username } = this.state;
    return (
      <div>
        <form onSubmit={e => this.callCreate(e)}>
          <input
            name="Message"
            value={message}
            placeholder="Go ahead and comment!"
            onChange={e => this.setState({ message: e.target.value })}
          />
          <input
            name="Username"
            value={username}
            placeholder="Who are you?"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <button type="submit">Comment</button>
        </form>
      </div>
    );
  }
}
