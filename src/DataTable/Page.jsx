import React, { useMemo, useCallback } from 'react'
import PropTypes from 'prop-types';

const Page = (props) => {
  const { pageNumber, currentPageNumber, onChange } = props;

  const isActivePage = useMemo(() => currentPageNumber === pageNumber, [currentPageNumber, pageNumber]);

  const handleClick = useCallback((event) => {
    event.preventDefault();
    onChange(pageNumber)
  }, [pageNumber, onChange]);

  return (
      <li className="page-item mr-1">
        <button className={`page-link ${isActivePage ? 'button-outline' : ''}`} onClick={handleClick} >{pageNumber + 1}</button>
      </li>
  )
};

Page.propTypes = {
  pageNumber: PropTypes.number,
  currentPageNumber: PropTypes.number,
  onChange: PropTypes.func,
};

export default Page
