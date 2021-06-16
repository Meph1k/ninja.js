import React from 'react';
import PropTypes from 'prop-types';

import DataTable from './DataTable';
import './App.css';
import DataRow from './shared-prop-types/data-rows';

// No need for class components
const App = ({ rows }) => {
  return (
    <div className="container mt-3">
      <DataTable rows={rows} rowsPerPage={5} />
    </div>
  );
}

App.propTypes = {
  rows: PropTypes.arrayOf(DataRow),
};

export default App;
