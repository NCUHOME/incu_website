import React from 'react'
import ReactDOM from 'react-dom'

// Your top level component
import App from './App'

if (location.origin === "http://incu.ncuos.com") {
  location.protocol = "https:";
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
