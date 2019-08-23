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
      id: post.id,
      ownerId: post.ownerId,
      views: post.views,
      list: comments,
      isReady: true
    });
  };

  public render() {
    const { isReady, title, ownerId, username, message, id, list } = this.state;
    if (isReady) {
      return (
        <div>
          <Link to="/">Get back, get back, get back!</Link>
          <hr />
          <Bulletin title={title} ownerId={ownerId} message={message} username={username} id={id} />
          <CommentList list={list} />
          <CommentSubmit userId={1} postId={id} callback={this.getPageData} />
        </div>
      );
    } else {
      return <div>NOT READY</div>;
    }
  }
}
