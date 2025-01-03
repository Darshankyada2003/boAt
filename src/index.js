import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Snowfall from 'react-snowfall'

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = "Buy Earbuds, Headphones, Earphones at India's No.1 Earwear Brand: boAt"

root.render(
  <BrowserRouter>
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <Snowfall
        color="#fff"
        snowflakeCount={100}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <App />
    </div>
  </BrowserRouter>
);

reportWebVitals();
