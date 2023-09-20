import './App.scss';
import { Col, Row } from 'antd';
import { Counter } from '../Counter/Counter';
import { Typography } from 'antd';

import '../../i18n/config';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const { Title } = Typography;

type NavProps = {
  title: string;
  description: string;
};

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
      {/* <p>{t('title', { name: 'John' })}</p>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p> */}
      <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
        <option value="en">English</option>
        <option value="th">ไทย</option>
      </select>
      <header className="App-header">
        <Row className="Nav"  justify="center">
          {navItems.map(({title, description}: NavProps, index: number) => (
            <Col
              xs={{ span: 4}}
              className="Nav-item"
              key={index}
            >
              <Title level={5} className="title">
                {title}
              </Title>
              {description}
            </Col>
         ))}
        </Row>
        <Counter />
      </header>
      
    </div>
  );
};

export default App;


