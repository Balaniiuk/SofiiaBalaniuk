import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//const root = ReactDOM.createRoot(documen.querySelector("body"));

ReactDOM.createRoot(document.getElementById('root')).render(
//root.render(
<StrictMode>
    <App />
  </StrictMode>
);