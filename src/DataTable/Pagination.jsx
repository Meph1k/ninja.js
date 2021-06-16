import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import times from 'lodash/times';

import Page from './Page'

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  const pages = useMemo(() => times(totalNumberOfPages, (pageNumber) => (
      <Page
          key={pageNumber}
          currentPageNumber={currentPageNumber}
          pageNumber={pageNumber}
          onChange={onChange} />
  )), [totalNumberOfPages, currentPageNumber, onChange]);

  if (pages.length <= 1) {
    return null
  }

  return(
    <ul className="pagination">
      {pages}
    </ul>
  )
};

Pagination.propTypes = {
    currentPageNumber: PropTypes.number,
    totalNumberOfPages: PropTypes.number,
    onChange: PropTypes.func,
};

export default Pagination
