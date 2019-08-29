import * as React from 'react';

type BulletinHeaderProps = {
  title: string;
};

export default class BulletinHeader extends React.Component<BulletinHeaderProps> {
  public render() {
    const { title } = this.props;
    return (
      <div className="title">
        <h2>{title}</h2>
      </div>
    );
  }
}
