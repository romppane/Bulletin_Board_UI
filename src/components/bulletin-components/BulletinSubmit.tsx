import * as React from 'react';
import { createPost } from '../../utility/Data-fetcher';
import { Post } from '../../Types';

type BulletinSubmitProps = {
  ownerId: number;
  callback: Function;
};

type BulletinSubmitState = {
  title: string;
  message: string;
  username: string;
};

export default class BulletinSubmit extends React.Component<
  BulletinSubmitProps,
  BulletinSubmitState
> {
  constructor(props: BulletinSubmitProps) {
    super(props);

    this.state = {
      title: '',
      message: '',
      username: ''
    };
  }

  callCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    const { ownerId, callback } = this.props;
    const { title, message, username } = this.state;
    e.preventDefault();
    // GETS CATEGORY HARD CODED CURRENTLY
    await createPost({ ownerId, title, message, username } as Post);
    this.setState({
      title: '',
      message: '',
      username: ''
    });
    callback();
  };

  public render() {
    const { message, title, username } = this.state;
    return (
      <form onSubmit={e => this.callCreate(e)}>
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
        <input
          name="Username"
          value={username}
          placeholder="Who is this?"
          onChange={e => this.setState({ username: e.target.value })}
        />
        <button type="submit">Post</button>
      </form>
    );
  }
}
