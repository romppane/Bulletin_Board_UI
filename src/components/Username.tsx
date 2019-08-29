import * as React from 'react';
import { formatDistanceToNow } from 'date-fns';

type UsernameProps = { username: string; createdAt: string };

export default class Username extends React.Component<UsernameProps> {
  public render() {
    const { username, createdAt } = this.props;
    const conversion = new Date(createdAt);
    const daysAgo = formatDistanceToNow(conversion).replace('about', '');

    return (
      <div className="username">
        <p>
          Posted by {username}
          <br />
          {daysAgo} ago
        </p>
      </div>
    );
  }
}
