import * as React from 'react';

export type BulletinCommentProps = {};

export type BulletinCommentState = {};

export default class BulletinComment extends React.Component<
  BulletinCommentProps,
  BulletinCommentState
> {
  constructor(props: BulletinCommentProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div />;
  }
}
