const MatrixSolver = require('../../src/controllers/matrix-solver.js')
var solver = new MatrixSolver();

export const OtherRows = ({userToneRow, name, rowIndex, labelNumbersY, invertedToneRow, toneRowIntervals}) => {
  return (
    <tr id={name}>
      <th>{labelNumbersY.length ? "P" + labelNumbersY[rowIndex]:""}</th>
      <td>{solver.numberToName(invertedToneRow)[rowIndex]}</td>
      {[...Array(11)].map((x, i) =>
        <td key={i}>{solver.numberToName(solver.generateRow(invertedToneRow[rowIndex], toneRowIntervals))[i + 1]}</td>
      )}
      <th>{labelNumbersY.length ? "R" + labelNumbersY[rowIndex]:""}</th>
    </tr>
  );
}
