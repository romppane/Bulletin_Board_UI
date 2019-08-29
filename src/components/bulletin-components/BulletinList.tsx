import * as React from 'react';
import Bulletin from './Bulletin';
import { Post } from '../../Types';
import './Bulletin.css';

type BulletinListProps = {
  list: Post[];
};

export default class BulletinList extends React.Component<BulletinListProps> {
  public render = () => {
    const { list } = this.props;

    if (list.length > 0) {
      const organizedList = list.sort((a, b) => {
        const aDate = new Date(a.createdAt);
        const bDate = new Date(b.createdAt);
        return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
      });
      return (
        <div className="bulletinList">
          {organizedList.map(bulletin => (
            <Bulletin
              title={bulletin.title}
              message={bulletin.message}
              username={bulletin.username}
              createdAt={bulletin.createdAt}
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
