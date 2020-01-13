import React from 'react';
import { render } from 'react-dom'; // Rendering react for websites different than for mobiles devices
                                    // {} to import one of the methods of the package
import StorePicker from './components/StorePicker';
import App from './components/App';
import './css/style.css';


render(<App />, document.querySelector('#main'));
// render(<StorePicker />, document.querySelector('#main'));
// render(<p>HEEEYYYYYYY</p>, document.querySelector('#main'));