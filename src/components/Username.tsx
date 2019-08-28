import * as React from 'react';
import { formatDistanceToNow } from 'date-fns';

type UsernameProps = { username: string; createdAt: string };

export default class Username extends React.Component<UsernameProps> {
  public render() {
    const { username, createdAt } = this.props;
    const conversion = new Date(createdAt);
    const daysAgo = formatDistanceToNow(conversion);
    return (
      <div className="username">
        <p>
          {daysAgo} ago by
          <br />
          {username}
        </p>
      </div>
    );
  }
}
