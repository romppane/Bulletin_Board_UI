import * as React from 'react';
import Comment from './Comment';
import { CommentType } from '../../Types';
import { fetchComments } from '../../utility/Data-fetcher';

type CommentListProps = {
  id: number;
};

type CommentListState = {
  list: CommentType[];
};

export default class CommentList extends React.Component<CommentListProps, CommentListState> {
  constructor(props: CommentListProps) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentDidMount() {
    const { id } = this.props;
    fetchComments(id)
      .then(json => this.setState({ list: json }))
      .catch(error => console.log(error));
  }

  public render() {
    const { list } = this.state;
    if (list.length > 0) {
      return (
        <div>
          {list.map(comment => (
            <Comment message={comment.message} />
          ))}
        </div>
      );
    } else {
      return <div />;
    }
  }
}
