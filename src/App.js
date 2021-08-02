import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

var noteArr = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
var intervalNames = ["m2", "M2", "m3", "M3", "P4", "TT", "P5", "m6", "M6", "m7", "M7"]


//user's input
var pZeroNoteArr = [0, 1, 6, 7, 5, 2, 4, 3, 10, 9, 11, 8];


//returns an array, length 11, of the intervals between each note
const findIntervals = (inputArr) => {
  var intervalArr = [];
  var inputArrCopy = inputArr.slice()
  while (inputArrCopy.length > 1) {
    intervalArr.push(inputArrCopy[1] - inputArrCopy[0]);
    inputArrCopy.shift()
  };
  return intervalArr;
}

//Inteval Array of P0
var pZeroIntervalArr = findIntervals(pZeroNoteArr)


//function that takes first note and intervalArr and return 12-tone row
const generateRow = (firstNote, intervalArr) => {
  var newNoteArr = [firstNote]

  for (var i = 0; i < 11; i++) {
    var newNote = newNoteArr[i] + intervalArr[i]
    if (newNote >= 12) {
      newNoteArr.push(newNote - 12)
    } else if (newNote < 0) {
      newNoteArr.push(newNote + 12)
    } else {
      newNoteArr.push(newNote)
    }
  }
  return newNoteArr
}


//function that inverts the intervalArr
const findInverseIntervals = (intervalArr) => {
  var inverseIntervalArr = [];
  for (var i = 0; i < 11; i++) {
    if (intervalArr[i] > 0) {
      inverseIntervalArr.push(-Math.abs(intervalArr[i]))
    } else {
      inverseIntervalArr.push(Math.abs(intervalArr[i]))
    }
  }
  return inverseIntervalArr;
}

//function that turns note numbers into note names
const numberToName = (noteNumberArr) => {
  var noteNameArr = [];
  noteNumberArr.forEach(element => noteNameArr.push(noteArr[element]));
  return noteNameArr;
}

//function that returns string of interval names
const intervalNameStr = (intervalArr) => {
  var intNameStr = "<p>";
  for (var i = 0; i < 11; i++) {
    if (Math.sign(intervalArr[i]) === -1) {
      intNameStr += "&darr;" + intervalNames[Math.abs(intervalArr[i]) - 1] + "   "
    } else {
      intNameStr += "&uarr;" + intervalNames[intervalArr[i] - 1] + "   "
    }
  }
  intNameStr += "</p>"
  return intNameStr;
}


//I0 interval array
var iZeroIntervalArr = findInverseIntervals(pZeroIntervalArr);
//I0 note number array
var iZeroNoteArr = generateRow(0, iZeroIntervalArr);

//console.log(numberToName(pZeroNoteArr))
//console.log(iZeroIntervalArr)
//console.log(intervalNameStr(iZeroIntervalArr))



/*NEXT STEP IS TO FIGURE OUT HOW TO DISPLAY IT ALL, THEN TO GET THE USER INPUT SET UP. THE ABOVE FUNCTIONS CAN GET ME ALL THE INFO FOR THE MATRIX*/

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
    var toneRowIntervals = findIntervals(this.state.userToneRow);
    var invertedIntervals = findInverseIntervals(toneRowIntervals);
    var invertedToneRow = generateRow(this.state.userToneRow[0], invertedIntervals);
    var labelNumbersX = generateRow(0, toneRowIntervals);
    var labelNumbersY = generateRow(0, invertedIntervals);

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
        return {__html: intervalNameStr(this.state.toneRowIntervals)};
      } else {
        return {__html: "Select tone row and press enter"};
      }
    }

  render() {
    //any styling
    const backgroundStyle = {
      padding: '10px 0'
    }

    const containerStyle = {
      margin: 'auto',
      width: '650px',

    }
    const buttonContainer = {

    }
    const gridCSS = {
      display: 'grid',
      justifyContent: 'center',
      gridTemplateColumns: '40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px',
      gridTemplateRows: '40px 30px',
      gridColumnGap: "4px",
      gridRowGap: "10px"
    };

    const clearButton = {
      gridColumn: "9 / 11"
    }

    const backspaceButton = {
      gridColumn: "7 / 9"
    }

    const enterButton = {
      gridColumn: "11 / 13"
    }

    const indent = {
      textIndent: "55px"
    }

    const tableStyle = {

    }



    return(
      <div style={backgroundStyle}><div style={containerStyle}>
        <h1>12-Tone Matrix Generator</h1>
        <div id="note-selector">
          <h3>Select Row Order</h3>
          <div style={buttonContainer}><div id="buttons" style={gridCSS}>
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

            <button id="backspace-button" value = "backspace" style={backspaceButton} disabled={!this.state.userToneRow.length} onClick={this.backspace}>Backspace</button>
            <button id="clear-button" value = "clear" style={clearButton} onClick={this.clearInput}>Clear</button>
            <button id="enter-button" value = "enter" style={enterButton} disabled={this.state.userToneRow.length != 12} onClick={this.calculateMatrix}>Enter</button>
            </div></div>
        </div>
        <div id="matrix">
          <h3>Your Matrix</h3>
          <table style={tableStyle}>
            <tr id="header-row">
              <td></td>
              <th>I0</th>
              <th>{this.state.labelNumbersX.length ? "I" + this.state.labelNumbersX[1]:""}</th>
              <th>{this.state.labelNumbersX.length ? "I" + this.state.labelNumbersX[2]:""}</th>
              <th>{this.state.labelNumbersX.length ? "I" + this.state.labelNumbersX[3]:""}</th>
              <th>{this.state.labelNumbersX.length ? "I" + this.state.labelNumbersX[4]:""}</th>
              <th>{this.state.labelNumbersX.length ? "I" + this.state.labelNumbersX[5]:""}</th>
              <th>{this.state.labelNumbersX.length ? "I" + this.state.labelNumbersX[6]:""}</th>
              <th>{this.state.labelNumbersX.length ? "I" + this.state.labelNumbersX[7]:""}</th>
              <th>{this.state.labelNumbersX.length ? "I" + this.state.labelNumbersX[8]:""}</th>
              <th>{this.state.labelNumbersX.length ? "I" + this.state.labelNumbersX[9]:""}</th>
              <th>{this.state.labelNumbersX.length ? "I" + this.state.labelNumbersX[10]:""}</th>
              <th>{this.state.labelNumbersX.length ? "I" + this.state.labelNumbersX[11]:""}</th>
              <td></td>
            </tr>

            <tr id="row-1">
              <th>P0</th>
              <td>{numberToName(this.state.userToneRow)[0]}</td>
              <td>{numberToName(this.state.userToneRow)[1]}</td>
              <td>{numberToName(this.state.userToneRow)[2]}</td>
              <td>{numberToName(this.state.userToneRow)[3]}</td>
              <td>{numberToName(this.state.userToneRow)[4]}</td>
              <td>{numberToName(this.state.userToneRow)[5]}</td>
              <td>{numberToName(this.state.userToneRow)[6]}</td>
              <td>{numberToName(this.state.userToneRow)[7]}</td>
              <td>{numberToName(this.state.userToneRow)[8]}</td>
              <td>{numberToName(this.state.userToneRow)[9]}</td>
              <td>{numberToName(this.state.userToneRow)[10]}</td>
              <td>{numberToName(this.state.userToneRow)[11]}</td>
              <th>R0</th>
            </tr>

            <tr id="row-2">
              <th>{this.state.labelNumbersY.length ? "P" + this.state.labelNumbersY[1]:""}</th>
              <td>{numberToName(this.state.invertedToneRow)[1]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[1], this.state.toneRowIntervals))[1]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[1], this.state.toneRowIntervals))[2]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[1], this.state.toneRowIntervals))[3]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[1], this.state.toneRowIntervals))[4]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[1], this.state.toneRowIntervals))[5]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[1], this.state.toneRowIntervals))[6]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[1], this.state.toneRowIntervals))[7]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[1], this.state.toneRowIntervals))[8]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[1], this.state.toneRowIntervals))[9]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[1], this.state.toneRowIntervals))[10]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[1], this.state.toneRowIntervals))[11]}</td>
              <th>{this.state.labelNumbersY.length ? "R" + this.state.labelNumbersY[1]:""}</th>
            </tr>

            <tr id="row-3">
              <th>{this.state.labelNumbersY.length ? "P" + this.state.labelNumbersY[2]:""}</th>
              <td>{numberToName(this.state.invertedToneRow)[2]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[2], this.state.toneRowIntervals))[1]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[2], this.state.toneRowIntervals))[2]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[2], this.state.toneRowIntervals))[3]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[2], this.state.toneRowIntervals))[4]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[2], this.state.toneRowIntervals))[5]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[2], this.state.toneRowIntervals))[6]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[2], this.state.toneRowIntervals))[7]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[2], this.state.toneRowIntervals))[8]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[2], this.state.toneRowIntervals))[9]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[2], this.state.toneRowIntervals))[10]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[2], this.state.toneRowIntervals))[11]}</td>
              <th>{this.state.labelNumbersY.length ? "R" + this.state.labelNumbersY[2]:""}</th>
            </tr>

            <tr id="row-4">
              <th>{this.state.labelNumbersY.length ? "P" + this.state.labelNumbersY[3]:""}</th>
              <td>{numberToName(this.state.invertedToneRow)[3]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[3], this.state.toneRowIntervals))[1]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[3], this.state.toneRowIntervals))[2]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[3], this.state.toneRowIntervals))[3]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[3], this.state.toneRowIntervals))[4]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[3], this.state.toneRowIntervals))[5]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[3], this.state.toneRowIntervals))[6]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[3], this.state.toneRowIntervals))[7]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[3], this.state.toneRowIntervals))[8]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[3], this.state.toneRowIntervals))[9]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[3], this.state.toneRowIntervals))[10]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[3], this.state.toneRowIntervals))[11]}</td>
              <th>{this.state.labelNumbersY.length ? "R" + this.state.labelNumbersY[3]:""}</th>
            </tr>

            <tr id="row-5">
              <th>{this.state.labelNumbersY.length ? "P" + this.state.labelNumbersY[4]:""}</th>
              <td>{numberToName(this.state.invertedToneRow)[4]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[4], this.state.toneRowIntervals))[1]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[4], this.state.toneRowIntervals))[2]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[4], this.state.toneRowIntervals))[3]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[4], this.state.toneRowIntervals))[4]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[4], this.state.toneRowIntervals))[5]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[4], this.state.toneRowIntervals))[6]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[4], this.state.toneRowIntervals))[7]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[4], this.state.toneRowIntervals))[8]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[4], this.state.toneRowIntervals))[9]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[4], this.state.toneRowIntervals))[10]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[4], this.state.toneRowIntervals))[11]}</td>
              <th>{this.state.labelNumbersY.length ? "R" + this.state.labelNumbersY[4]:""}</th>
            </tr>

            <tr id="row-6">
              <th>{this.state.labelNumbersY.length ? "P" + this.state.labelNumbersY[5]:""}</th>
              <td>{numberToName(this.state.invertedToneRow)[5]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[5], this.state.toneRowIntervals))[1]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[5], this.state.toneRowIntervals))[2]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[5], this.state.toneRowIntervals))[3]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[5], this.state.toneRowIntervals))[4]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[5], this.state.toneRowIntervals))[5]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[5], this.state.toneRowIntervals))[6]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[5], this.state.toneRowIntervals))[7]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[5], this.state.toneRowIntervals))[8]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[5], this.state.toneRowIntervals))[9]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[5], this.state.toneRowIntervals))[10]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[5], this.state.toneRowIntervals))[11]}</td>
              <th>{this.state.labelNumbersY.length ? "R" + this.state.labelNumbersY[5]:""}</th>
            </tr>

            <tr id="row-7">
              <th>{this.state.labelNumbersY.length ? "P" + this.state.labelNumbersY[6]:""}</th>
              <td>{numberToName(this.state.invertedToneRow)[6]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[6], this.state.toneRowIntervals))[1]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[6], this.state.toneRowIntervals))[2]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[6], this.state.toneRowIntervals))[3]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[6], this.state.toneRowIntervals))[4]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[6], this.state.toneRowIntervals))[5]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[6], this.state.toneRowIntervals))[6]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[6], this.state.toneRowIntervals))[7]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[6], this.state.toneRowIntervals))[8]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[6], this.state.toneRowIntervals))[9]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[6], this.state.toneRowIntervals))[10]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[6], this.state.toneRowIntervals))[11]}</td>
              <th>{this.state.labelNumbersY.length ? "R" + this.state.labelNumbersY[6]:""}</th>
            </tr>

            <tr id="row-8">
              <th>{this.state.labelNumbersY.length ? "P" + this.state.labelNumbersY[7]:""}</th>
              <td>{numberToName(this.state.invertedToneRow)[7]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[7], this.state.toneRowIntervals))[1]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[7], this.state.toneRowIntervals))[2]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[7], this.state.toneRowIntervals))[3]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[7], this.state.toneRowIntervals))[4]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[7], this.state.toneRowIntervals))[5]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[7], this.state.toneRowIntervals))[6]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[7], this.state.toneRowIntervals))[7]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[7], this.state.toneRowIntervals))[8]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[7], this.state.toneRowIntervals))[9]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[7], this.state.toneRowIntervals))[10]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[7], this.state.toneRowIntervals))[11]}</td>
              <th>{this.state.labelNumbersY.length ? "R" + this.state.labelNumbersY[7]:""}</th>
            </tr>

            <tr id="row-9">
              <th>{this.state.labelNumbersY.length ? "P" + this.state.labelNumbersY[8]:""}</th>
              <td>{numberToName(this.state.invertedToneRow)[8]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[8], this.state.toneRowIntervals))[1]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[8], this.state.toneRowIntervals))[2]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[8], this.state.toneRowIntervals))[3]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[8], this.state.toneRowIntervals))[4]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[8], this.state.toneRowIntervals))[5]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[8], this.state.toneRowIntervals))[6]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[8], this.state.toneRowIntervals))[7]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[8], this.state.toneRowIntervals))[8]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[8], this.state.toneRowIntervals))[9]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[8], this.state.toneRowIntervals))[10]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[8], this.state.toneRowIntervals))[11]}</td>
              <th>{this.state.labelNumbersY.length ? "R" + this.state.labelNumbersY[8]:""}</th>
            </tr>

            <tr id="row-10">
              <th>{this.state.labelNumbersY.length ? "P" + this.state.labelNumbersY[9]:""}</th>
              <td>{numberToName(this.state.invertedToneRow)[9]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[9], this.state.toneRowIntervals))[1]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[9], this.state.toneRowIntervals))[2]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[9], this.state.toneRowIntervals))[3]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[9], this.state.toneRowIntervals))[4]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[9], this.state.toneRowIntervals))[5]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[9], this.state.toneRowIntervals))[6]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[9], this.state.toneRowIntervals))[7]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[9], this.state.toneRowIntervals))[8]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[9], this.state.toneRowIntervals))[9]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[9], this.state.toneRowIntervals))[10]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[9], this.state.toneRowIntervals))[11]}</td>
              <th>{this.state.labelNumbersY.length ? "R" + this.state.labelNumbersY[9]:""}</th>
            </tr>

            <tr id="row-11">
              <th>{this.state.labelNumbersY.length ? "P" + this.state.labelNumbersY[10]:""}</th>
              <td>{numberToName(this.state.invertedToneRow)[10]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[10], this.state.toneRowIntervals))[1]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[10], this.state.toneRowIntervals))[2]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[10], this.state.toneRowIntervals))[3]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[10], this.state.toneRowIntervals))[4]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[10], this.state.toneRowIntervals))[5]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[10], this.state.toneRowIntervals))[6]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[10], this.state.toneRowIntervals))[7]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[10], this.state.toneRowIntervals))[8]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[10], this.state.toneRowIntervals))[9]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[10], this.state.toneRowIntervals))[10]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[10], this.state.toneRowIntervals))[11]}</td>
              <th>{this.state.labelNumbersY.length ? "R" + this.state.labelNumbersY[10]:""}</th>
            </tr>

            <tr id="row-12">
              <th>{this.state.labelNumbersY.length ? "P" + this.state.labelNumbersY[11]:""}</th>
              <td>{numberToName(this.state.invertedToneRow)[11]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[11], this.state.toneRowIntervals))[1]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[11], this.state.toneRowIntervals))[2]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[11], this.state.toneRowIntervals))[3]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[11], this.state.toneRowIntervals))[4]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[11], this.state.toneRowIntervals))[5]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[11], this.state.toneRowIntervals))[6]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[11], this.state.toneRowIntervals))[7]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[11], this.state.toneRowIntervals))[8]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[11], this.state.toneRowIntervals))[9]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[11], this.state.toneRowIntervals))[10]}</td>
              <td>{numberToName(generateRow(this.state.invertedToneRow[11], this.state.toneRowIntervals))[11]}</td>
              <th>{this.state.labelNumbersY.length ? "R" + this.state.labelNumbersY[11]:""}</th>
            </tr>

            <tr id="footer-row">
              <td></td>
              <th>RI0</th>
              <th>{this.state.labelNumbersX.length ? "RI" + this.state.labelNumbersX[1]:""}</th>
              <th>{this.state.labelNumbersX.length ? "RI" + this.state.labelNumbersX[2]:""}</th>
              <th>{this.state.labelNumbersX.length ? "RI" + this.state.labelNumbersX[3]:""}</th>
              <th>{this.state.labelNumbersX.length ? "RI" + this.state.labelNumbersX[4]:""}</th>
              <th>{this.state.labelNumbersX.length ? "RI" + this.state.labelNumbersX[5]:""}</th>
              <th>{this.state.labelNumbersX.length ? "RI" + this.state.labelNumbersX[6]:""}</th>
              <th>{this.state.labelNumbersX.length ? "RI" + this.state.labelNumbersX[7]:""}</th>
              <th>{this.state.labelNumbersX.length ? "RI" + this.state.labelNumbersX[8]:""}</th>
              <th>{this.state.labelNumbersX.length ? "RI" + this.state.labelNumbersX[9]:""}</th>
              <th>{this.state.labelNumbersX.length ? "RI" + this.state.labelNumbersX[10]:""}</th>
              <th>{this.state.labelNumbersX.length ? "RI" + this.state.labelNumbersX[11]:""}</th>
              <td></td>
            </tr>
          </table>
          <h3>Your Intervals</h3>
          <div dangerouslySetInnerHTML={this.createMarkup()} style={indent}></div>
        </div>
        </div>
      </div>
    )
  }
}

export default TwelveToneMatrix;
