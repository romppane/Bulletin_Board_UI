import * as React from 'react';
import Bulletin from './Bulletin';

export type BulletinListProps = {};

export type BulletinListState = {
  list: any[];
  isReady: boolean;
};

export default class BulletinList extends React.Component<BulletinListProps, BulletinListState> {
  constructor(props: BulletinListProps) {
    super(props);

    this.state = {
      list: [],
      isReady: false
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/posts')
      .then(responce => responce.json())
      .then(json => this.setState({ list: json, isReady: true }))
      .catch(error => console.log(error));
  }

  public render() {
    const { list, isReady } = this.state;
    console.log(list);
    if (isReady) {
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
      return <div />;
    }
  }
}