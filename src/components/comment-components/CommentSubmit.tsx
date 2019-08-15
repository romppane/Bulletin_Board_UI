import * as React from 'react';

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

  callPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('http://localhost:3001/comments', {
      method: 'POST',
      body: JSON.stringify({
        userId: this.props.userId,
        postId: this.props.postId,
        message: this.state.message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        this.setState({
          message: ''
        });
        window.location.reload();
      })
      .catch(error => console.log(error));
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
