import * as React from 'react';
import BulletinHeader from './BulletinHeader';
import BulletinMessage from './BulletinMessage';
import Username from '../Username';
import './Bulletin.css';

type BulletinProps = {
  title: string;
  ownerId: number;
  message: string;
  username: string;
  createdAt: string;
  id: number;
};

export default class Bulletin extends React.Component<BulletinProps> {
  public render() {
    const { title, username, message, createdAt } = this.props;
    return (
      <div className="bulletin">
        <div className="bulletinHeader">
          <BulletinHeader title={title} />
          <Username username={username} createdAt={createdAt} />
        </div>
        <div>
          <BulletinMessage message={message} />
        </div>
      </div>
    );
  }
}
