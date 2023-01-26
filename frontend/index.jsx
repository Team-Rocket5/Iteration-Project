import React from 'react'
import { render } from 'react-dom'
import { store } from './src/app/store'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
)
