import * as React from 'react';
import Bulletin from '../components/bulletin-components/Bulletin';
import CommentList from '../components/comment-components/CommentList';
import { RouteComponentProps } from 'react-router';

interface CommentPageProps extends RouteComponentProps {}

type CommentPageState = {};

export default class CommentPage extends React.Component<CommentPageProps, CommentPageState> {
  constructor(props: CommentPageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { header, ownerId, message, id } = this.props.location.state;
    return (
      <div>
        <Bulletin header={header} ownerId={ownerId} message={message} id={id} />
        <CommentList id={id} />
      </div>
    );
  }
}
