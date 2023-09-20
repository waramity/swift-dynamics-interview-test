import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'
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
            {/* <Route path="/posts/:postId" component={SinglePostPage} />
             */}
    </Routes>
  </BrowserRouter>,

  </Provider>,
  document.getElementById('root')
)