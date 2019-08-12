import * as React from 'react';
import BulletinHeader from './BulletinHeader';
import BulletinMessage from './BulletinMessage';
import AvatarIcon from './AvatarIcon';

export type BulletinProps = {
  header: string;
  ownerId: number;
  message: string;
};

export type BulletinState = {};

export default class Bulletin extends React.Component<BulletinProps, BulletinState> {
  constructor(props: BulletinProps) {
    super(props);

    this.state = {};
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
