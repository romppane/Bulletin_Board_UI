import * as React from 'react';
import Comment from './Comment';

type CommentListProps = {
  postId: number;
};

type CommentListState = {
  list: any[];
  isReady: boolean;
};

export default class CommentList extends React.Component<CommentListProps, CommentListState> {
  constructor(props: CommentListProps) {
    super(props);

    this.state = {
      list: [],
      isReady: false
    };
  }

  componentDidMount() {
    const { postId } = this.props;
    fetch(`http://localhost:3001/posts/${postId}/comments`)
      .then(responce => responce.json())
      .then(json => this.setState({ list: json, isReady: true }))
      .catch(error => console.log(error));
  }

  public render() {
    const { list, isReady } = this.state;
    if (isReady) {
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
