import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
