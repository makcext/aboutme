import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import LayoutV5 from "./LayoutV5";

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// console.log("hi from index.jsx");