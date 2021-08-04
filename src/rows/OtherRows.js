const MatrixSolver = require('../../src/controllers/matrix-solver.js')
var solver = new MatrixSolver();

export const OtherRows = ({userToneRow, name, rowIndex, labelNumbersY, invertedToneRow, toneRowIntervals}) => {
  return (
    <tr id={name}>
      <th>{labelNumbersY.length ? "P" + labelNumbersY[rowIndex]:""}</th>
      <td>{solver.numberToName(invertedToneRow)[rowIndex]}</td>
      <td>{solver.numberToName(solver.generateRow(invertedToneRow[rowIndex], toneRowIntervals))[1]}</td>
      <td>{solver.numberToName(solver.generateRow(invertedToneRow[rowIndex], toneRowIntervals))[2]}</td>
      <td>{solver.numberToName(solver.generateRow(invertedToneRow[rowIndex], toneRowIntervals))[3]}</td>
      <td>{solver.numberToName(solver.generateRow(invertedToneRow[rowIndex], toneRowIntervals))[4]}</td>
      <td>{solver.numberToName(solver.generateRow(invertedToneRow[rowIndex], toneRowIntervals))[5]}</td>
      <td>{solver.numberToName(solver.generateRow(invertedToneRow[rowIndex], toneRowIntervals))[6]}</td>
      <td>{solver.numberToName(solver.generateRow(invertedToneRow[rowIndex], toneRowIntervals))[7]}</td>
      <td>{solver.numberToName(solver.generateRow(invertedToneRow[rowIndex], toneRowIntervals))[8]}</td>
      <td>{solver.numberToName(solver.generateRow(invertedToneRow[rowIndex], toneRowIntervals))[9]}</td>
      <td>{solver.numberToName(solver.generateRow(invertedToneRow[rowIndex], toneRowIntervals))[10]}</td>
      <td>{solver.numberToName(solver.generateRow(invertedToneRow[rowIndex], toneRowIntervals))[11]}</td>
      <th>{labelNumbersY.length ? "R" + labelNumbersY[rowIndex]:""}</th>
    </tr>
  );
}
