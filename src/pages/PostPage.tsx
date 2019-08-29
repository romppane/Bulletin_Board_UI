import * as React from 'react';
import Bulletin from '../components/bulletin-components/Bulletin';
import CommentList from '../components/comment-components/CommentList';
import { RouteComponentProps } from 'react-router';
import CommentSubmit from '../components/comment-components/CommentSubmit';
import { Link } from 'react-router-dom';
import { Post, Categories, Comment } from '../Types';
import { fetchPost, fetchComments } from '../utility/Data-fetcher';

interface PostPageProps extends RouteComponentProps<{ id: string }> {}

type PostTypeState = Post & { isReady: boolean; list: Comment[] };

export default class PostPage extends React.Component<PostPageProps, PostTypeState> {
  constructor(props: PostPageProps) {
    super(props);

    this.state = {
      title: '',
      category: Categories.Default,
      message: '',
      username: '',
      createdAt: '',
      id: 0,
      ownerId: 0,
      views: 0,
      list: [],
      isReady: false
    };
  }

  componentDidMount() {
    this.getPageData();
  }

  getPageData = async () => {
    const post = await fetchPost(this.props.match.params.id);
    const comments = await fetchComments(this.props.match.params.id);
    this.setState({
      title: post.title,
      category: post.category,
      message: post.message,
      username: post.username,
      createdAt: post.createdAt,
      id: post.id,
      ownerId: post.ownerId,
      views: post.views,
      list: comments,
      isReady: true
    });
  };

  public render() {
    const { isReady, title, ownerId, username, message, createdAt, id, list } = this.state;
    if (isReady) {
      return (
        <div className="container">
          <div className="header">
            <Link to="/">
              <h1>Get back, get back, get back!</h1>
            </Link>
          </div>
          <div className="left"></div>
          <div className="listing">
            <Bulletin
              title={title}
              ownerId={ownerId}
              message={message}
              username={username}
              id={id}
              createdAt={createdAt}
            />
            <CommentSubmit userId={1} postId={id} callback={this.getPageData} />
            <label>Comments</label>
            <hr />
            <CommentList list={list} />
          </div>
          <div className="right"></div>
        </div>
      );
    } else {
      return <div>Loading..</div>;
    }
  }
}
