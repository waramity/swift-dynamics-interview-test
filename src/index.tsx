import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'
import Test1 from './components/Test1/Test1'
import Test2 from './components/Test2/Test2'
import { store } from './store'
import { Provider } from 'react-redux'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<App />} 
      />
      <Route
        path="/test-1"
        element={<Test1 />} 
      />
      <Route
        path="/test-2"
        element={<Test2 />} 
      />
    </Routes>
  </BrowserRouter>

  </Provider>,
  document.getElementById('root')
)