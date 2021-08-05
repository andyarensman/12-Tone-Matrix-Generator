export const LabelRows = ({labelNumbersX, name}) => {
  return (
    <tr id="label-row">
      <td></td>
      <th>{name}0</th>
      {[...Array(11)].map((x, i) =>
        <th key={i}>{labelNumbersX.length ? name + labelNumbersX[i + 1]:""}</th>
      )}
      <td></td>
    </tr>
  );
}
