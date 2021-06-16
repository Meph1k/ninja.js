import React from 'react'
import DataRow from '../shared-prop-types/data-rows';

const Row = (props) => {
  const { row } = props

  return (
    <tr>
      <td>
        <a href={row.edit_path}>
          {row.name1}
        </a><br />
        <small>{row.email}</small>
      </td>
    </tr>
  )
}

Row.propTypes = {
    row: DataRow,
}

export default Row
