import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { LabelRows } from './rows/LabelRows'
import { RowOne } from './rows/RowOne'
import { OtherRows } from './rows/OtherRows'

const MatrixSolver = require('../src/controllers/matrix-solver.js')
var solver = new MatrixSolver();




class TwelveToneMatrix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToneRow: [],
      toneRowIntervals: [],
      invertedIntervals: [],
      invertedToneRow: [],
      labelNumbersX: [],
      labelNumbersY: [],
      disabledC: false,
      disabledDb: false,
      disabledD: false,
      disabledEb: false,
      disabledE: false,
      disabledF: false,
      disabledGb: false,
      disabledG: false,
      disabledAb: false,
      disabledA: false,
      disabledBb: false,
      disabledB: false
    }
    //bind stuff here
    this.noteInput = this.noteInput.bind(this)
    this.backspace = this.backspace.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.disableButton = this.disableButton.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.calculateMatrix = this.calculateMatrix.bind(this)
    this.createMarkup = this.createMarkup.bind(this)

  }
  //formulas here
  noteInput(event) {
    const val = event.target.value
    this.disableButton(val)
    this.setState((prevState) => {
      return {
        userToneRow: [...prevState.userToneRow, parseInt(val, 10)]
      }
    })
  }

  backspace() {
    var backspaceArr = [...this.state.userToneRow]
    var popped = backspaceArr.pop()
    this.enableButton(popped);

    this.setState({
      userToneRow: [...backspaceArr],
      toneRowIntervals: [],
      invertedIntervals: [],
      invertedToneRow: [],
      labelNumbersX: [],
      labelNumbersY: []
    });

  }

  clearInput() {
    this.setState({
      userToneRow: [],
      toneRowIntervals: [],
      invertedIntervals: [],
      invertedToneRow: [],
      labelNumbersX: [],
      labelNumbersY: [],
      disabledC: false,
      disabledDb: false,
      disabledD: false,
      disabledEb: false,
      disabledE: false,
      disabledF: false,
      disabledGb: false,
      disabledG: false,
      disabledAb: false,
      disabledA: false,
      disabledBb: false,
      disabledB: false,
    })
  }

  disableButton(value) {
    switch (value) {
      case "0":
        this.setState({
          disabledC: true
        })
        break;
      case "1":
        this.setState({
          disabledDb: true
        })
        break;
      case "2":
        this.setState({
          disabledD: true
        })
        break;
      case "3":
        this.setState({
          disabledEb: true
        })
        break;
      case "4":
        this.setState({
          disabledE: true
        })
        break;
      case "5":
        this.setState({
          disabledF: true
        })
        break;
      case "6":
        this.setState({
          disabledGb: true
        })
        break;
      case "7":
        this.setState({
          disabledG: true
        })
        break;
      case "8":
        this.setState({
          disabledAb: true
        })
        break;
      case "9":
        this.setState({
          disabledA: true
        })
        break;
      case "10":
        this.setState({
          disabledBb: true
        })
        break;
      case "11":
        this.setState({
          disabledB: true
        })
        break;
      default:
        break;
    }
  }

  enableButton(val) {
    switch (val) {
      case 0:
        this.setState({
          disabledC: false
        })
        break;
      case 1:
        this.setState({
          disabledDb: false
        })
        break;
      case 2:
        this.setState({
          disabledD: false
        })
        break;
      case 3:
        this.setState({
          disabledEb: false
        })
        break;
      case 4:
        this.setState({
          disabledE: false
        })
        break;
      case 5:
        this.setState({
          disabledF: false
        })
        break;
      case 6:
        this.setState({
          disabledGb: false
        })
        break;
      case 7:
        this.setState({
          disabledG: false
        })
        break;
      case 8:
        this.setState({
          disabledAb: false
        })
        break;
      case 9:
        this.setState({
          disabledA: false
        })
        break;
      case 10:
        this.setState({
          disabledBb: false
        })
        break;
      case 11:
        this.setState({
          disabledB: false
        })
        break;
      default:
        break;
    }
  }

  calculateMatrix() {
    var toneRowIntervals = solver.findIntervals(this.state.userToneRow);
    var invertedIntervals = solver.findInverseIntervals(toneRowIntervals);
    var invertedToneRow = solver.generateRow(this.state.userToneRow[0], invertedIntervals);
    var labelNumbersX = solver.generateRow(0, toneRowIntervals);
    var labelNumbersY = solver.generateRow(0, invertedIntervals);

    this.setState({
      toneRowIntervals: [...toneRowIntervals],
      invertedIntervals: [...invertedIntervals],
      invertedToneRow: [...invertedToneRow],
      labelNumbersX: [...labelNumbersX],
      labelNumbersY: [...labelNumbersY]
    })

  }

  createMarkup() {
      if (this.state.labelNumbersX.length) {
        return {__html: solver.intervalNameStr(this.state.toneRowIntervals)};
      } else {
        return {__html: "Select tone row and press enter"};
      }
    }


  render() {

    return(
      <div className="BackgroundStyle"><div className="ContainerStyle">
        <h1>12-Tone Matrix Generator</h1>
        <div id="note-selector">
          <h3>Select Row Order</h3>
          <div id="buttons" className="GridCSS">
            <button id="c-button" value = "0" disabled={this.state.disabledC} onClick={this.noteInput}>C</button>
            <button id="db-button" value = "1" disabled={this.state.disabledDb} onClick={this.noteInput}>Db</button>
            <button id="d-button" value = "2" disabled={this.state.disabledD} onClick={this.noteInput}>D</button>
            <button id="eb-button" value = "3" disabled={this.state.disabledEb} onClick={this.noteInput}>Eb</button>
            <button id="e-button" value = "4" disabled={this.state.disabledE} onClick={this.noteInput}>E</button>
            <button id="f-button" value = "5" disabled={this.state.disabledF} onClick={this.noteInput}>F</button>
            <button id="gb-button" value = "6" disabled={this.state.disabledGb} onClick={this.noteInput}>Gb</button>
            <button id="g-button" value = "7" disabled={this.state.disabledG} onClick={this.noteInput}>G</button>
            <button id="ab-button" value = "8" disabled={this.state.disabledAb} onClick={this.noteInput}>Ab</button>
            <button id="a-button" value = "9" disabled={this.state.disabledA} onClick={this.noteInput}>A</button>
            <button id="bb-button" value = "10" disabled={this.state.disabledBb} onClick={this.noteInput}>Bb</button>
            <button id="b-button" value = "11" disabled={this.state.disabledB} onClick={this.noteInput}>B</button>

            <button id="backspace-button" value = "backspace" className="BackspaceButton" disabled={!this.state.userToneRow.length} onClick={this.backspace}>Backspace</button>
            <button id="clear-button" value = "clear" className="ClearButton" onClick={this.clearInput}>Clear</button>
            <button id="enter-button" value = "enter" className="EnterButton" disabled={this.state.userToneRow.length !== 12} onClick={this.calculateMatrix}>Enter</button>
          </div>
        </div>
        <div id="matrix">
          <h3>Your Matrix</h3>
          <table>
            <LabelRows labelNumbersX={this.state.labelNumbersX} name="I"/>

            <RowOne userToneRow={this.state.userToneRow} />

            {[...Array(11)].map((x, i) =>
              <OtherRows key={i} userToneRow={this.state.userToneRow} name={"row-" + i} rowIndex={i + 1} labelNumbersY={this.state.labelNumbersY} invertedToneRow={this.state.invertedToneRow} toneRowIntervals={this.state.toneRowIntervals} />
            )}

            <LabelRows labelNumbersX={this.state.labelNumbersX} name="RI"/>

          </table>
          <h3>Your Intervals</h3>
          <div dangerouslySetInnerHTML={this.createMarkup()} className="Indent"></div>
        </div>
        </div>
      </div>
    )
  }
}

export default TwelveToneMatrix;
