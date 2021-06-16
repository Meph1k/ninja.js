import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types';

import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'
import DataRow from "../shared-prop-types/data-rows";

const DataTable = ({ rows, rowsPerPage }) => {
  const [rowsToRender, setRowsToRender] = useState(rows);
  const [inputValue, setInputValue] = useState('');
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const calculateTotalNumberOfPages = useCallback((rows) => {
    if (rowsPerPage === 0) return 0;

    return Math.ceil(rows.length / rowsPerPage)
  }, [rowsPerPage]);

  const [totalNumberOfPages, setTotalNumberOfPages] = useState(calculateTotalNumberOfPages(rows));

  const search = useCallback((event) => {
    const text = event.target.value;

    setInputValue(text);

    let rowsFound = rows

    if (text) {
      rowsFound = rows.filter((row) => {
        return row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
            (row.email?.toLowerCase().search(text.toLowerCase()) > -1)
      })
    }

    setRowsToRender(rowsFound);
    setCurrentPageNumber(0);
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound))
  }, [rows, calculateTotalNumberOfPages]);

  const getRowsInPageNumber = useCallback((pageNumber) => {
    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }, [rowsPerPage]);

  return (
      <div>
        <Search onSearch={search} value={inputValue} />
        <table>
          <tbody>
          {
            rowsToRender
                .map(row => <Row key={row.per_id} row={row} />)
                .slice(...getRowsInPageNumber(currentPageNumber))
          }
          </tbody>
        </table>
        <Pagination
            currentPageNumber={currentPageNumber}
            totalNumberOfPages={totalNumberOfPages}
            onChange={setCurrentPageNumber} />
      </div>
  )
};

DataTable.propTypes = {
  rows: PropTypes.arrayOf(DataRow),
  rowsPerPage: PropTypes.number,
};

DataTable.defaultProps = {
  rowsPerPage: 40,
};

export default DataTable
