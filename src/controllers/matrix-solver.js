var noteArr = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
var intervalNames = ["m2", "M2", "m3", "M3", "P4", "TT", "P5", "m6", "M6", "m7", "M7"];

class MatrixSolver {

  //returns an array, length 11, of the intervals between each note
  findIntervals(inputArr) {
    var intervalArr = [];
    var inputArrCopy = inputArr.slice()
    while (inputArrCopy.length > 1) {
      intervalArr.push(inputArrCopy[1] - inputArrCopy[0]);
      inputArrCopy.shift()
    };
    return intervalArr;
  }

  //function that inverts the intervalArr
  findInverseIntervals(intervalArr) {
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

  //function that takes first note and intervalArr and returns 12-tone row
  generateRow(firstNote, intervalArr) {
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

  //function that turns note numbers into note names
  numberToName(noteNumberArr) {
    var noteNameArr = [];
    noteNumberArr.forEach(element => noteNameArr.push(noteArr[element]));
    return noteNameArr;
  }

  //function that returns string of interval names
  intervalNameStr(intervalArr) {
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
}

module.exports = MatrixSolver
