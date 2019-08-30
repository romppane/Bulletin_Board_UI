import * as React from 'react';
import Bulletin from './Bulletin';
import { Post } from '../../Types';
import './Bulletin.css';
import { Link } from 'react-router-dom';

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
        return bDate.getTime() - aDate.getTime();
      });
      return (
        <div className="bulletinList">
          {organizedList.map(bulletin => (
            <Link key={bulletin.id} to={{ pathname: `/post/${bulletin.id}` }}>
              <Bulletin
                title={bulletin.title}
                message={bulletin.message}
                username={bulletin.username}
                createdAt={bulletin.createdAt}
                ownerId={bulletin.ownerId}
                id={bulletin.id}
              />
            </Link>
          ))}
        </div>
      );
    } else {
      return <div>No Posts</div>;
    }
  };
}
