import * as React from 'react';
import { formatDistanceToNow } from 'date-fns';

type BulletinFooterProps = {
  createdAt: string;
};

type BulletinFooterState = {};

export default class BulletinFooter extends React.Component<
  BulletinFooterProps,
  BulletinFooterState
> {
  constructor(props: BulletinFooterProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { createdAt } = this.props;
    const conversion = new Date(createdAt);
    const daysAgo = formatDistanceToNow(conversion);
    return <div>Sent {daysAgo} ago.</div>;
  }
}
