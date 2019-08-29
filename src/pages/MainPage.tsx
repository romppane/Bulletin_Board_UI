import * as React from 'react';
import BulletinList from '../components/bulletin-components/BulletinList';
import BulletinSubmit from '../components/bulletin-components/BulletinSubmit';
import { Post } from '../Types';
import { fetchPosts } from '../utility/Data-fetcher';
import './Page.css';

type MainPageState = {
  list: Post[];
  isReady: Boolean;
};

export default class MainPage extends React.Component<{}, MainPageState> {
  constructor(props: any) {
    super(props);

    this.state = {
      list: [],
      isReady: false
    };
  }

  componentDidMount() {
    this.getPageData();
  }

  getPageData = async () => {
    const posts = await fetchPosts();
    this.setState({
      list: posts,
      isReady: true
    });
  };

  public render() {
    const { list } = this.state;
    return (
      <div className="container">
        <div className="header">
          <label>Forum</label>
        </div>
        <div className="left"></div>
        <div className="listing">
          <BulletinSubmit ownerId={1} callback={this.getPageData} />
          <BulletinList list={list} />
        </div>
        <div className="right"></div>
      </div>
    );
  }
}
