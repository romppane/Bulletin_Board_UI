import * as React from 'react';
import Username from '../Username';
import './Bulletin.css';

type BulletinProps = {
  title: string;
  ownerId: number;
  message: string;
  username: string;
  createdAt: string;
  id: number;
  truncateText: boolean;
};

export default class Bulletin extends React.Component<BulletinProps> {
  public render() {
    const { title, username, message, createdAt, truncateText } = this.props;
    const renderedMessage =
      truncateText && message.length > 48 ? message.substring(0, 50) + '..' : message;
    return (
      <div className="bulletin">
        <div className="bulletinHeader">
          <h2>{title}</h2>
          <Username username={username} createdAt={createdAt} />
        </div>
        <div className="message">{renderedMessage}</div>
      </div>
    );
  }
}
