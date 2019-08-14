import * as React from 'react';
import { Link } from 'react-router-dom';

type BulletinHeaderProps = {
  header: string;
  id: number;
};

export default class BulletinHeader extends React.Component<BulletinHeaderProps> {
  public render() {
    const { header, id } = this.props;
    return (
      <Link to={{ pathname: `/comment/${id}`, state: { postId: { id } } }}>
        <div>{header}</div>
      </Link>
    );
  }
}
