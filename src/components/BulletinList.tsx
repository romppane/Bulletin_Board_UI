import * as React from 'react';
import Bulletin from './Bulletin';

type BulletinListState = {
  list: any[];
};

export default class BulletinList extends React.Component<{}, BulletinListState> {
  state: Readonly<BulletinListState> = {
    list: []
  };

  componentDidMount() {
    fetch('http://localhost:3001/posts')
      .then(responce => responce.json())
      .then(json => this.setState({ list: json }))
      .catch(error => console.log(error));
  }

  public render() {
    const { list } = this.state;
    if (list.length > 0) {
      return (
        <div>
          {list.map(bulletin => (
            <Bulletin
              header={bulletin.category}
              message={bulletin.message}
              ownerId={bulletin.ownerId}
            />
          ))}
        </div>
      );
    } else {
      return <div>No Posts</div>;
    }
  }
}
