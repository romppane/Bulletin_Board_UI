import * as React from 'react';

type IBulletinSubmitProps = {
  ownerId: number;
};

type IBulletinSubmitState = {
  title: string;
  message: string;
};

export default class BulletinSubmit extends React.Component<
  IBulletinSubmitProps,
  IBulletinSubmitState
> {
  constructor(props: IBulletinSubmitProps) {
    super(props);

    this.state = {
      title: '',
      message: ''
    };
  }

  callPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('http://localhost:3001/posts', {
      method: 'POST',
      body: JSON.stringify({
        ownerId: this.props.ownerId,
        category: this.state.title,
        message: this.state.message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(responce =>
        this.setState({
          title: '',
          message: ''
        })
      )
      .catch(error => console.log(error));
  };

  public render() {
    const { message, title } = this.state;
    return (
      <form onSubmit={e => this.callPost(e)}>
        <input
          name="Title"
          value={title}
          placeholder="Title goes here"
          onChange={e => this.setState({ title: e.target.value })}
        />
        <input
          name="Message"
          value={message}
          placeholder="Enter your message"
          onChange={e => this.setState({ message: e.target.value })}
        />
        <button type="submit">Post</button>
      </form>
    );
  }
}
