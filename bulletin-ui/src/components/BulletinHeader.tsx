import * as React from 'react';

export type BulletinHeaderProps = {
    header: string;
    avatar: string;
}

export type BulletinHeaderState = {
}

export default class BulletinHeader extends React.Component<BulletinHeaderProps, BulletinHeaderState> {
  constructor(props: BulletinHeaderProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
      const {header, avatar} = this.props;
    return (
      <div>
        <tr>
            <th>{header}</th>
            <td>{avatar}</td>
        </tr>
      </div>
    );
  }
}
