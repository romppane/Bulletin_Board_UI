import * as React from 'react';

type BulletinHeaderProps = {
  title: string;
};

type BulletinHeaderState = {
  displayTitle: string;
};

export default class BulletinHeader extends React.Component<
  BulletinHeaderProps,
  BulletinHeaderState
> {
  constructor(props: BulletinHeaderProps) {
    super(props);

    this.state = {
      displayTitle: ''
    };
  }

  componentDidMount() {
    const { title } = this.props;

    if (title.length > 35) {
      const substring = title.substring(0, 33) + '..';
      this.setState({
        displayTitle: substring
      });
    } else {
      this.setState({
        displayTitle: title
      });
    }
  }
  public render() {
    const { displayTitle } = this.state;
    return (
      <div className="title">
        <h2>{displayTitle}</h2>
      </div>
    );
  }
}
