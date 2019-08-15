import * as React from 'react';
import BulletinList from '../components/bulletin-components/BulletinList';
import BulletinSubmit from '../components/bulletin-components/BulletinSubmit';

export interface MainPageProps {}

export interface MainPageState {}

export default class MainPage extends React.Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <BulletinSubmit ownerId={1} />
        <BulletinList />
      </div>
    );
  }
}
