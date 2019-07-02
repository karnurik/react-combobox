import React, { Component } from 'react';

class ComboboxErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  /*
  * @description Catch errors in any components below and re-render with error message
  */
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // todo: log error messages to an error reporting service 
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong with Combobox.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // render children
    return this.props.children;
  }  
}

export default ComboboxErrorBoundry;