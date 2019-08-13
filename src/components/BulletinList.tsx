import * as React from 'react';
import Bulletin from './Bulletin';

type BulletinListState = {
  list: any[];
  isReady: boolean;
  renderObject: JSX.Element;
};

export default class BulletinList extends React.Component<{}, BulletinListState> {
  state: Readonly<BulletinListState> = {
    list: [],
    isReady: false,
    renderObject: <div>Loading...</div>
  };

  fetchData = () => {
    fetch('http://localhost:3001/posts')
      .then(responce => responce.json())
      .then(json => {
        this.setState({ list: json, isReady: true });
        this.handleList();
      })
      .catch(error =>
        this.setState({
          renderObject: <button onClick={this.fetchData}>Reload component</button>
        })
      );
  };

  handleList = () => {
    const { list } = this.state;
    if (list.length > 0) {
      this.setState({
        renderObject: (
          <div>
            {list.map(bulletin => (
              <Bulletin
                header={bulletin.category}
                message={bulletin.message}
                ownerId={bulletin.ownerId}
              />
            ))}
          </div>
        )
      });
    } else {
      this.setState({ renderObject: <div>No Posts</div> });
    }
  };

  componentDidMount = () => {
    this.fetchData();
  };

  public render = () => {
    const { renderObject: returnObject } = this.state;
    return returnObject;
  };
}
