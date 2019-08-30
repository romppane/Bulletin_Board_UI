import * as React from 'react';
import { Redirect } from 'react-router';

type ErrorProps = {};

type ErrorState = {
  hasError: boolean;
};

export default class ErrorHandler extends React.Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true
    };
  }

  public render() {
    if (this.state.hasError) {
      return <Redirect to="/" />;
    }
    return this.props.children;
  }
}
