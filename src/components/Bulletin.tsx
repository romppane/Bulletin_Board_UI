import * as React from 'react';
import BulletinHeader from './BulletinHeader';
import BulletinMessage from './BulletinMessage';
import AvatarIcon from './AvatarIcon';

type BulletinProps = {
  header: string;
  ownerId: number;
  message: string;
};

export default class Bulletin extends React.Component<BulletinProps> {
  constructor(props: BulletinProps) {
    super(props);
  }
  public render() {
    const { header, ownerId, message } = this.props;
    return (
      <div>
        <tr>
          <td>
            <BulletinHeader header={header} />
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
