import * as React from 'react';
import { postComment } from '../../utility/Data-fetcher';
import { CommentType } from '../../Types';

type CommentSubmitProps = {
  userId: number;
  postId: number;
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

  callPost = async (e: React.FormEvent<HTMLFormElement>) => {
    const { userId, postId } = this.props;
    const { message } = this.state;
    e.preventDefault();
    await postComment({ userId, postId, message } as CommentType);
    this.setState({ message: '' });
    window.location.reload();
  };

  public render() {
    const { message } = this.state;
    return (
      <div>
        <form onSubmit={e => this.callPost(e)}>
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
