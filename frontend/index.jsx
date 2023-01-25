import React from 'react'
import { render } from 'react-dom'
import { store } from './src/app/store'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
