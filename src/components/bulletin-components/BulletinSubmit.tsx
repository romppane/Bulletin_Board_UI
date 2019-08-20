import * as React from 'react';
import { postPost } from '../../utility/Data-fetcher';
import { Post } from '../../Types';

type BulletinSubmitProps = {
  ownerId: number;
};

type BulletinSubmitState = {
  title: string;
  message: string;
};

export default class BulletinSubmit extends React.Component<
  BulletinSubmitProps,
  BulletinSubmitState
> {
  constructor(props: BulletinSubmitProps) {
    super(props);

    this.state = {
      title: '',
      message: ''
    };
  }

  callPost = async (e: React.FormEvent<HTMLFormElement>) => {
    const { ownerId } = this.props;
    const { title, message } = this.state;
    e.preventDefault();
    // GETS CATEGORY HARD CODED CURRENTLY
    await postPost({ ownerId, title, message } as Post);
    this.setState({
      title: '',
      message: ''
    });
    // Is there a better way to do this?
    window.location.reload();
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
