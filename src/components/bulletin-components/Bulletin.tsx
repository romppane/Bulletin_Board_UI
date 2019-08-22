import * as React from 'react';
import BulletinHeader from './BulletinHeader';
import BulletinMessage from './BulletinMessage';
import { Link } from 'react-router-dom';
import Username from '../Username';

type BulletinProps = {
  title: string;
  ownerId: number;
  message: string;
  username: string;
  id: number;
};

export default class Bulletin extends React.Component<BulletinProps> {
  public render() {
    const { title, username, message, id } = this.props;
    return (
      <div>
        <div>
          <Link
            to={{
              pathname: `/post/${id}`
            }}
          >
            <div>
              <BulletinHeader title={title} />
            </div>
          </Link>
          <div>
            <Username username={username} />
          </div>
        </div>
        <div>
          <BulletinMessage message={message} />
        </div>
      </div>
    );
  }
}
