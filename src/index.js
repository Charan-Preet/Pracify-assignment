import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Second from './pages/second'
import Footer from './components/footer'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Second/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
