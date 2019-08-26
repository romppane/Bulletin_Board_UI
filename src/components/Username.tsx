import * as React from 'react';

type UsernameProps = { username: string };

export default class Username extends React.Component<UsernameProps> {
  public render() {
    const { username } = this.props;
    return <p>Username: {username}</p>;
  }
}