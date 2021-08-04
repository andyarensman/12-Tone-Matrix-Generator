const MatrixSolver = require('../../src/controllers/matrix-solver.js')
var solver = new MatrixSolver();

export const RowOne = ({userToneRow}) => {
  return (
    <tr id="row-1">
      <th>P0</th>
      <td>{solver.numberToName(userToneRow)[0]}</td>
      <td>{solver.numberToName(userToneRow)[1]}</td>
      <td>{solver.numberToName(userToneRow)[2]}</td>
      <td>{solver.numberToName(userToneRow)[3]}</td>
      <td>{solver.numberToName(userToneRow)[4]}</td>
      <td>{solver.numberToName(userToneRow)[5]}</td>
      <td>{solver.numberToName(userToneRow)[6]}</td>
      <td>{solver.numberToName(userToneRow)[7]}</td>
      <td>{solver.numberToName(userToneRow)[8]}</td>
      <td>{solver.numberToName(userToneRow)[9]}</td>
      <td>{solver.numberToName(userToneRow)[10]}</td>
      <td>{solver.numberToName(userToneRow)[11]}</td>
      <th>R0</th>
    </tr>
  );
}
