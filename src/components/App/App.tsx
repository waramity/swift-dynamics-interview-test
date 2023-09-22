import './App.scss';
import { Col, Row } from 'antd';
import { Typography } from 'antd';

import '../../i18n/config';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 



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
  const { t, i18n } = useTranslation();
  const [navItems, setNavItems] = useState<NavProps[]>([]);

  const items: NavProps[] = t('navItems', { returnObjects: true });

  useEffect(() => {
    setNavItems(items)
  }, []);

  return (
    <div className="App">

      <h1>{t("welcome")}</h1>

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
                  {items[index].title}
                </Title>
                <p>
                  {items[index].description}
                </p>
              </Col>
            </Link>
         ))}
        </Row>
      </header>
      
    </div>
  );
};

export default App;


