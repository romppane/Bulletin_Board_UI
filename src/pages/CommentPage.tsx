import * as React from 'react';
import Bulletin from '../components/bulletin-components/Bulletin';
import CommentList from '../components/comment-components/CommentList';
import { RouteComponentProps } from 'react-router';
import CommentSubmit from '../components/comment-components/CommentSubmit';
import { Link } from 'react-router-dom';

interface CommentPageProps extends RouteComponentProps {}

type CommentPageState = {};

export default class CommentPage extends React.Component<CommentPageProps, CommentPageState> {
  constructor(props: CommentPageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { title, ownerId, message, id } = this.props.location.state;
    return (
      <div>
        <Link to="/">Get back, get back, get back!</Link>
        <Bulletin title={title} ownerId={ownerId} message={message} id={id} />
        <CommentList id={id} />
        <CommentSubmit userId={1} postId={id} />
      </div>
    );
  }
}
