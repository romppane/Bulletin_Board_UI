import * as React from 'react';

export type BulletinMessageProps = {
    message : string;
}

export type BulletinMessageState = {
  expanded : boolean;
}

export default class BulletinMessage extends React.Component<BulletinMessageProps, BulletinMessageState> {
  constructor(props: BulletinMessageProps) {
    super(props);

  }
  state : Readonly<BulletinMessageState> = {
    expanded : false
  }

  private onClick = () => {
    this.setState({
      expanded : !this.state.expanded
    })
  }

  public render() {
    const {message} = this.props;
    return (
      <div>
        { 
          this.state.expanded ? 
            <div><button onClick={this.onClick}>Hide</button> <p>{message}</p></div>
              :
            <div><button onClick={this.onClick}>Expand</button></div>
        }
      </div>
    );
  }
}
