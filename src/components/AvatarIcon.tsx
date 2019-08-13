import * as React from 'react';

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
    console.log(id);
    fetch(`http://localhost:3001/users/${id}`)
      .then(responce => responce.json())
      .then(json => this.setState({ avatar: json.avatar }))
      .catch(error => console.log(error));
  }

  public render() {
    const { avatar } = this.state;
    return <p>{avatar}</p>;
  }
}
