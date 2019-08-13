import * as React from 'react';
import Comment from './Comment';

type CommentListProps = {
  postId: number;
};

type CommentListState = {
  list: any[];
};

export default class CommentList extends React.Component<CommentListProps, CommentListState> {
  constructor(props: CommentListProps) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentDidMount() {
    const { postId } = this.props;
    fetch(`http://localhost:3001/posts/${postId}/comments`)
      .then(responce => responce.json())
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
