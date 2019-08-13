import * as React from 'react';

type BulletinHeaderProps = {
  header: string;
};

export default class BulletinHeader extends React.Component<BulletinHeaderProps> {
  constructor(props: BulletinHeaderProps) {
    super(props);
  }

  public render() {
    const { header } = this.props;
    return (
      <div>
        <p>{header}</p>
      </div>
    );
  }
}
