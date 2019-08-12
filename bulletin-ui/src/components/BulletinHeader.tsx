import * as React from 'react';

export type BulletinHeaderProps = {
    header: string;
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
      const {header} = this.props;
    return (
      <div>
            <p>{header}</p>
      </div>
    );
  }
}
