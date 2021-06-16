import PropTypes from 'prop-types';

const DataRow = PropTypes.shape({
  name1: PropTypes.string,
  email: PropTypes.string,
  edit_path: PropTypes.string,
  per_id: PropTypes.number,
});

export default DataRow;
