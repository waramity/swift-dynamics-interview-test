import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'
import Test1 from './components/Test1/Test1'
import Test2 from './components/Test2/Test2'
import { store } from './store'
import { Provider } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';

import './locales/config';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'


const LanguageSelector: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select className="custom-select" style={{ width: 200 }} onChange={changeLanguageHandler}>
      <option value="en">English</option>
      <option value="th">ไทย</option>
    </select>
  );
};


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <LanguageSelector />
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