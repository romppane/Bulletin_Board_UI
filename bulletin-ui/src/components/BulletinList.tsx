import * as React from 'react';
import { BulletinType } from '../BulletinType';
import Bulletin from './Bulletin';

export type BulletinListProps = {
    list: BulletinType[];
}

export type BulletinListState = {
}

export default class BulletinList extends React.Component<BulletinListProps, BulletinListState> {
  constructor(props: BulletinListProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
      const {list} = this.props;
      const bulletins = list.map(bulletin => {
          <Bulletin header={bulletin.category} avatar="AVATAR" message={bulletin.message}/>
      })
    return (
      <div>
        {bulletins}
      </div>
    );
  }
}
