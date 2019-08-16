import * as React from 'react';
import { fetchUser } from '../utility/Data-fetcher';

type AvatarIconProps = {
  id: number;
};

type AvatarIconState = {
  avatar: string;
};

export default class AvatarIcon extends React.Component<AvatarIconProps, AvatarIconState> {
  constructor(props: AvatarIconProps) {
    super(props);

    this.state = {
      avatar: 'Avatar'
    };
  }

  componentDidMount() {
    const { id } = this.props;
    fetchUser(id).then(result => this.setState({ avatar: result.avatar }));
  }

  public render() {
    const { avatar } = this.state;
    return <p>{avatar}</p>;
  }
}
