export const LabelRows = ({labelNumbersX, name}) => {
  return (
    <tr id="label-row">
      <td></td>
      <th>{name}0</th>
      <th>{labelNumbersX.length ? name + labelNumbersX[1]:""}</th>
      <th>{labelNumbersX.length ? name + labelNumbersX[2]:""}</th>
      <th>{labelNumbersX.length ? name + labelNumbersX[3]:""}</th>
      <th>{labelNumbersX.length ? name + labelNumbersX[4]:""}</th>
      <th>{labelNumbersX.length ? name + labelNumbersX[5]:""}</th>
      <th>{labelNumbersX.length ? name + labelNumbersX[6]:""}</th>
      <th>{labelNumbersX.length ? name + labelNumbersX[7]:""}</th>
      <th>{labelNumbersX.length ? name + labelNumbersX[8]:""}</th>
      <th>{labelNumbersX.length ? name + labelNumbersX[9]:""}</th>
      <th>{labelNumbersX.length ? name + labelNumbersX[10]:""}</th>
      <th>{labelNumbersX.length ? name + labelNumbersX[11]:""}</th>
      <td></td>
    </tr>
  );
}
