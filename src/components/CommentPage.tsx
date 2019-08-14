import * as React from 'react';
import Bulletin from './Bulletin';
import CommentList from './CommentList';

export interface CommentPageProps {}

export interface CommentPageState {}

export default class CommentPage extends React.Component<CommentPageProps, CommentPageState> {
  constructor(props: CommentPageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div />;
  }
}
