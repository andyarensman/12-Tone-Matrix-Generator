import { MatrixSolver } from '../../src/controllers/matrix-solver.js'
var solver = new MatrixSolver();

export const RowOne = ({userToneRow}) => {
  return (
    <tr id="row-1">
      <th>P0</th>
      {[...Array(12)].map((x, i) =>
        <td>{solver.numberToName(userToneRow)[i]}</td>
      )}
      <th>R0</th>
    </tr>
  );
}
