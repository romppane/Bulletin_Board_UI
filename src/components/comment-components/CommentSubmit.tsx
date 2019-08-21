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
};

export default class CommentSubmit extends React.Component<CommentSubmitProps, CommentSubmitState> {
  constructor(props: CommentSubmitProps) {
    super(props);

    this.state = {
      message: ''
    };
  }

  callCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    const { userId, postId, callback } = this.props;
    const { message } = this.state;
    e.preventDefault();
    await createComment({ userId, postId, message } as Comment);
    this.setState({ message: '' });
    callback();
  };

  public render() {
    const { message } = this.state;
    return (
      <div>
        <form onSubmit={e => this.callCreate(e)}>
          <input
            name="Message"
            value={message}
            placeholder="Go ahead and comment!"
            onChange={e => this.setState({ message: e.target.value })}
          />
          <button type="submit">Comment</button>
        </form>
      </div>
    );
  }
}
