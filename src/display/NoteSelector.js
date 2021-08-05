import React from 'react';

export class NoteSelector extends React.Component {
  render() {
    return (
      <div id="note-selector">
        <h3>Select Row Order</h3>
        <div id="buttons" className="GridCSS">
          <button id="c-button" value = "0" disabled={this.props.disabledC} onClick={this.props.noteInput}>C</button>
          <button id="db-button" value = "1" disabled={this.props.disabledDb} onClick={this.props.noteInput}>Db</button>
          <button id="d-button" value = "2" disabled={this.props.disabledD} onClick={this.props.noteInput}>D</button>
          <button id="eb-button" value = "3" disabled={this.props.disabledEb} onClick={this.props.noteInput}>Eb</button>
          <button id="e-button" value = "4" disabled={this.props.disabledE} onClick={this.props.noteInput}>E</button>
          <button id="f-button" value = "5" disabled={this.props.disabledF} onClick={this.props.noteInput}>F</button>
          <button id="gb-button" value = "6" disabled={this.props.disabledGb} onClick={this.props.noteInput}>Gb</button>
          <button id="g-button" value = "7" disabled={this.props.disabledG} onClick={this.props.noteInput}>G</button>
          <button id="ab-button" value = "8" disabled={this.props.disabledAb} onClick={this.props.noteInput}>Ab</button>
          <button id="a-button" value = "9" disabled={this.props.disabledA} onClick={this.props.noteInput}>A</button>
          <button id="bb-button" value = "10" disabled={this.props.disabledBb} onClick={this.props.noteInput}>Bb</button>
          <button id="b-button" value = "11" disabled={this.props.disabledB} onClick={this.props.noteInput}>B</button>

          <button id="backspace-button" value = "backspace" className="BackspaceButton" disabled={!this.props.userToneRow.length} onClick={this.props.backspace}>Backspace</button>
          <button id="clear-button" value = "clear" className="ClearButton" onClick={this.props.clearInput}>Clear</button>
          <button id="enter-button" value = "enter" className="EnterButton" disabled={this.props.userToneRow.length !== 12} onClick={this.props.calculateMatrix}>Enter</button>
        </div>
      </div>
    );
  }
}
