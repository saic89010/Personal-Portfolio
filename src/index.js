import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let port = process.env.port || 8080;

App.listen(port, ()=>{
  // eslint-disable-next-line no-template-curly-in-string
  console.log('App is running at port ${port}');
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
