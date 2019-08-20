import * as React from 'react';
import BulletinHeader from './BulletinHeader';
import BulletinMessage from './BulletinMessage';
import AvatarIcon from '../AvatarIcon';
import { Link } from 'react-router-dom';

type BulletinProps = {
  title: string;
  ownerId: number;
  message: string;
  id: number;
};

export default class Bulletin extends React.Component<BulletinProps> {
  public render() {
    const { title, ownerId, message, id } = this.props;
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
            <AvatarIcon id={ownerId} />
          </div>
        </div>
        <div>
          <BulletinMessage message={message} />
        </div>
      </div>
    );
  }
}
