import * as React from 'react';
import BulletinHeader from './BulletinHeader';
import BulletinMessage from './BulletinMessage';
import AvatarIcon from '../AvatarIcon';
import { Link } from 'react-router-dom';

type BulletinProps = {
  header: string;
  ownerId: number;
  message: string;
  id: number;
};

export default class Bulletin extends React.Component<BulletinProps> {
  public render() {
    const { header, ownerId, message, id } = this.props;
    return (
      <div>
        <tr>
          <Link
            to={{
              pathname: `/comment/${id}`,
              state: {
                header,
                id,
                ownerId,
                message
              }
            }}
          >
            <td>
              <BulletinHeader header={header} />
            </td>
          </Link>
          <td>
            <AvatarIcon id={ownerId} />
          </td>
        </tr>
        <tr>
          <BulletinMessage message={message} />
        </tr>
      </div>
    );
  }
}
