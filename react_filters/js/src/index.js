import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Gets view element.
const view = document.querySelector('.view-id-events');

// Creates react container and appends it to the view element.
const reactElement = document.createElement('div');
reactElement.setAttribute('id', 'react-app');
view.insertAdjacentElement('beforebegin', reactElement);

/* eslint react/jsx-filename-extension: 0 */
ReactDOM.render(<App />, reactElement);
