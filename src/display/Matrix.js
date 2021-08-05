import { LabelRows } from '../rows/LabelRows'
import { RowOne } from '../rows/RowOne'
import { OtherRows } from '../rows/OtherRows'

export const Matrix = ({ labelNumbersX, userToneRow, labelNumbersY, invertedToneRow, toneRowIntervals }) => {
  return (
    <div id="matrix">
      <h3>Your Matrix</h3>
      <table>
        <LabelRows
          labelNumbersX={labelNumbersX}
          name="I"/>

        <RowOne
          userToneRow={userToneRow} />

        {[...Array(11)].map((x, i) =>
          <OtherRows
            key={i}
            userToneRow={userToneRow}
            name={"row-" + i}
            rowIndex={i + 1}
            labelNumbersY={labelNumbersY}
            invertedToneRow={invertedToneRow}
            toneRowIntervals={toneRowIntervals} />
        )}

        <LabelRows
          labelNumbersX={labelNumbersX}
          name="RI" />

      </table>
    </div>
  )
}
