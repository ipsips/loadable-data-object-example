import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import someStore from './SomeStore';
import App from './App';

ReactDOM.render(<Provider someStore={someStore}><App /></Provider>, document.getElementById('root'));
