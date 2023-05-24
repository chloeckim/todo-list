import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { nanoid } from 'nanoid';

const DATA = [
  { id: nanoid(), text: "Do dishes", completed: false },
  { id: nanoid(), text: "Laundry", completed: false },
  { id: nanoid(), text: "Get groceries", completed: true },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);

