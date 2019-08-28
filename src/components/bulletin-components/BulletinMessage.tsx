import * as React from 'react';

type BulletinMessageProps = {
  message: string;
};

type BulletinMessageState = {};

export default class BulletinMessage extends React.Component<
  BulletinMessageProps,
  BulletinMessageState
> {
  constructor(props: BulletinMessageProps) {
    super(props);
  }

  public render() {
    const { message } = this.props;
    return <div>{message}</div>;
  }
}
