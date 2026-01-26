import React from 'react';

// React DOM
import ReactDOM from 'react-dom/client';

// Router
import { BrowserRouter } from 'react-router-dom';

// App Component
import App from './App';

// Styles
import './index.css';

// Performance Measuring
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();