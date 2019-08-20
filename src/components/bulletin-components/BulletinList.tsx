import * as React from 'react';
import Bulletin from './Bulletin';
import { Post } from '../../Types';
import { fetchPosts } from '../../utility/Data-fetcher';

type BulletinListState = {
  list: Post[];
  isReady: boolean;
  error: boolean;
};

export default class BulletinList extends React.Component<{}, BulletinListState> {
  state: Readonly<BulletinListState> = {
    list: [],
    isReady: false,
    error: false
  };

  initializeData = () => {
    fetchPosts()
      .then(json => this.setState({ list: json, isReady: true, error: false }))
      .catch(error => {
        this.setState({
          error: true
        });
      });
  };

  componentDidMount = () => {
    this.initializeData();
  };

  public render = () => {
    const { isReady, list, error } = this.state;

    if (error) {
      return <button onClick={this.initializeData}>Reload component</button>;
    } else {
      if (isReady) {
        if (list.length > 0) {
          return (
            <div>
              {list.map(bulletin => (
                <Bulletin
                  title={bulletin.title}
                  message={bulletin.message}
                  ownerId={bulletin.ownerId}
                  id={bulletin.id}
                />
              ))}
            </div>
          );
        } else {
          return <div>No Posts</div>;
        }
      } else {
        return <div>Loading...</div>;
      }
    }
  };
}
