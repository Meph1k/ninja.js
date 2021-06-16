import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// I was thinking about moving this dataset to a const variable in React but I recalled
// a situation where we rendered React components using data from 'data' attributes
// which were created by PHP templates
const userData = JSON.parse(document.getElementById('user-data').dataset.users);

ReactDOM.render(<App rows={userData} />, document.getElementById('root'));
