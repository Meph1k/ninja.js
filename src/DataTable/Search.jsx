import React from 'react'
import PropTypes from 'prop-types';

const Search = (props) => {
  const { onSearch, value } = props

  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={onSearch}
        value={value}
      />
    </div>
  )
};

Search.propTypes = {
    onSearch: PropTypes.func,
    value: PropTypes.string,
};

export default Search
