import * as React from 'react';
import Bulletin from '../components/bulletin-components/Bulletin';
import CommentList from '../components/comment-components/CommentList';
import { RouteComponentProps } from 'react-router';
import CommentSubmit from '../components/comment-components/CommentSubmit';
import { Link } from 'react-router-dom';
import { PostType, Categories } from '../Types';
import { fetchPost } from '../utility/Data-fetcher';

interface CommentPageProps extends RouteComponentProps<{ id: string }> {}

type PostTypeState = PostType & { isReady: boolean };

export default class CommentPage extends React.Component<CommentPageProps, PostTypeState> {
  constructor(props: CommentPageProps) {
    super(props);

    this.state = {
      title: '',
      category: Categories.Default,
      message: '',
      id: 0,
      ownerId: 0,
      views: 0,
      isReady: false
    };
  }

  componentDidMount() {
    this.getPageData();
  }

  getPageData = () => {
    fetchPost(this.props.match.params.id).then(result => {
      this.setState({
        title: result.title,
        category: result.category,
        message: result.message,
        id: result.id,
        ownerId: result.ownerId,
        views: result.views,
        isReady: true
      });
    });
  };

  public render() {
    const { isReady, title, ownerId, message, id } = this.state;
    if (isReady) {
      return (
        <div>
          <Link to="/">Get back, get back, get back!</Link>
          <Bulletin title={title} ownerId={ownerId} message={message} id={id} />
          <CommentList id={id} />
          <CommentSubmit userId={1} postId={id} />
        </div>
      );
    } else {
      return <div>NOT READY</div>;
    }
  }
}
