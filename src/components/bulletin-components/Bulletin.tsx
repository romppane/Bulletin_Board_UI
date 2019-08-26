import * as React from 'react';
import BulletinHeader from './BulletinHeader';
import BulletinMessage from './BulletinMessage';
import { Link } from 'react-router-dom';
import Username from '../Username';
import BulletinFooter from './BulletinFooter';

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
    const { title, username, message, id, createdAt } = this.props;
    return (
      <div>
        <div>
          <Link
            to={{
              pathname: `/post/${id}`
            }}
          >
            <BulletinHeader title={title} />
          </Link>
          <Username username={username} />
        </div>
        <div>
          <BulletinMessage message={message} />
        </div>
        <BulletinFooter createdAt={createdAt} />
        <hr />
      </div>
    );
  }
}
