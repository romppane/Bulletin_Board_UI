import * as React from 'react';
import Bulletin from './Bulletin';
import { PostType } from '../Types';

type BulletinListState = {
  list: PostType[];
  isReady: boolean;
  error: boolean;
};

export default class BulletinList extends React.Component<{}, BulletinListState> {
  state: Readonly<BulletinListState> = {
    list: [],
    isReady: false,
    error: false
  };

  fetchData = () => {
    fetch('http://localhost:3001/posts')
      .then(responce => responce.json())
      .then(json => this.setState({ list: json, isReady: true, error: false }))
      .catch(error => {
        this.setState({
          error: true
        });
      });
  };

  componentDidMount = () => {
    this.fetchData();
  };

  public render = () => {
    const { isReady, list, error } = this.state;

    if (error) {
      return <button onClick={this.fetchData}>Reload component</button>;
    } else {
      if (isReady) {
        if (list.length > 0) {
          return (
            <div>
              {list.map(bulletin => (
                <Bulletin
                  header={bulletin.category}
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
