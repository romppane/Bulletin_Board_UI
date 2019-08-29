import * as React from 'react';

type BulletinMessageProps = {
  message: string;
};

type BulletinMessageState = {
  displayMessage: string;
};

export default class BulletinMessage extends React.Component<
  BulletinMessageProps,
  BulletinMessageState
> {
  constructor(props: BulletinMessageProps) {
    super(props);

    this.state = {
      displayMessage: ''
    };
  }

  componentDidMount() {
    const { message } = this.props;

    if (message.length > 48) {
      const substring = message.substring(0, 50) + '..';
      this.setState({
        displayMessage: substring
      });
    } else {
      this.setState({
        displayMessage: message
      });
    }
  }

  public render() {
    const { displayMessage } = this.state;
    return <div className="message">{displayMessage}</div>;
  }
}
