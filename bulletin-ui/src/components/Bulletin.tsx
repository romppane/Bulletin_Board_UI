import * as React from 'react';
import BulletinHeader from './BulletinHeader';
import BulletinMessage from './BulletinMessage';


export type BulletinProps = {
  header: string;
  avatar: string;
  message: string;
}

export type BulletinState = {
}

export default class Bulletin extends React.Component<BulletinProps, BulletinState> {
  constructor(props: BulletinProps) {
    super(props);

    this.state = {
    }
  }
  public render() {
    const {header, avatar, message} = this.props;
    return (
      <div>
        <BulletinHeader header={header} avatar={avatar} />
        <BulletinMessage message={message} />
      </div>
    );
  }
}
