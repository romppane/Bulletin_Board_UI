import * as React from 'react';
import Bulletin from './Bulletin';
import { Post } from '../../Types';

type BulletinListProps = {
  list: Post[];
};

export default class BulletinList extends React.Component<BulletinListProps> {
  public render = () => {
    const { list } = this.props;

    if (list.length > 0) {
      return (
        <div>
          {list.map(bulletin => (
            <Bulletin
              title={bulletin.title}
              message={bulletin.message}
              ownerId={bulletin.ownerId}
              id={bulletin.id}
              key={bulletin.id}
            />
          ))}
        </div>
      );
    } else {
      return <div>No Posts</div>;
    }
  };
}
