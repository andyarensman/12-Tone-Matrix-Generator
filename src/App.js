import './App.css';
import React from 'react';

import { Matrix } from './display/Matrix'
import { YourIntervals } from './display/YourIntervals'
import { NoteSelector } from './display/NoteSelector'

import { MatrixSolver } from './controllers/matrix-solver.js'
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

    this.noteInput = this.noteInput.bind(this)
    this.backspace = this.backspace.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.disableButton = this.disableButton.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.calculateMatrix = this.calculateMatrix.bind(this)
    this.createMarkup = this.createMarkup.bind(this)

  }

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
      <div className="BackgroundStyle">
        <div className="ContainerStyle">
          <h1>12-Tone Matrix Generator</h1>

          <NoteSelector
            disabledC={this.state.disabledC}
            disabledDb={this.state.disabledDb}
            disabledD={this.state.disabledD}
            disabledEb={this.state.disabledEb}
            disabledE={this.state.disabledE}
            disabledF={this.state.disabledF}
            disabledGb={this.state.disabledGb}
            disabledG={this.state.disabledG}
            disabledAb={this.state.disabledAb}
            disabledA={this.state.disabledA}
            disabledBb={this.state.disabledBb}
            disabledB={this.state.disabledB}
            noteInput={this.noteInput}
            userToneRow={this.state.userToneRow}
            backspace={this.backspace}
            clearInput={this.clearInput}
            calculateMatrix={this.calculateMatrix}/>

          <Matrix
            labelNumbersX={this.state.labelNumbersX}
            userToneRow={this.state.userToneRow}
            labelNumbersY={this.state.labelNumbersY}
            invertedToneRow={this.state.invertedToneRow}
            toneRowIntervals={this.state.toneRowIntervals}/>

          <YourIntervals
            createMarkup={this.createMarkup}/>

        </div>
      </div>
    )
  }
}

export default TwelveToneMatrix;
