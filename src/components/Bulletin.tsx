import * as React from 'react';
import BulletinHeader from './BulletinHeader';
import BulletinMessage from './BulletinMessage';
import AvatarIcon from './AvatarIcon';

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
          <td>
            <BulletinHeader header={header} id={id} />
          </td>
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
