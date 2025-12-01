import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let counter = 0
const root= ReactDOM.createRoot(document.getElementById('root'));

function render() {
  root.render(
    
      <Home seconds={counter} />
    
  );
}

window.addEventListener('load', () => {
  render();

  setInterval(()=> {
    counter += 1;
    render(); 
  }, 1000);
});
