import './App.scss';
import { Col, Row } from 'antd';
import { Counter } from '../Counter/Counter';
import { Typography } from 'antd';

import '../../i18n/config';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 


const { Title } = Typography;

type NavProps = {
  title: string;
  description: string;
};

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, ''); // Remove all non-word characters
}


const App: React.FC = () => {
  const count = 3;
  const { t, i18n, ready } = useTranslation();
  const [navItems, setNavItems] = useState<NavProps[]>([]);


  if (!ready) return "loading translations...";

  useEffect(() => {
    const items: NavProps[] = t('navItems', { returnObjects: true });
    setNavItems(items)
  }, []);

  const changeLanguageHandler = (e: any) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }

  return (
    <div className="App">

      <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
        <option value="en">English</option>
        <option value="th">ไทย</option>
      </select>
      <header className="App-header">
        <Row className="Nav"  justify="center">
          {navItems.map(({title, description}: NavProps, index: number) => (
            <Link to={`/${slugify(title)}`} className="Nav-item">
              <Col
                xs={{ span: 4}}
                className="Nav-col"
                key={index}
              >

                <Title level={5} className="title">
                  {title}
                </Title>
                <p>
                  {description}
                </p>
              </Col>
            </Link>
         ))}
        </Row>
        <Counter />
      </header>
      
    </div>
  );
};

export default App;


