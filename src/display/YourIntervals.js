import React from 'react';

export class YourIntervals extends React.Component {
  render() {
    return (
      <div className="YourIntervals">
        <h3>Your Intervals</h3>
        <div dangerouslySetInnerHTML={this.props.createMarkup()} className="Indent"></div>
      </div>
    );
  }
}
