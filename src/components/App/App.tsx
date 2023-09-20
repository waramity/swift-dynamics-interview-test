import './App.scss';
import { Col, Row } from 'antd';
import { Counter } from '../Counter/Counter';
import { Typography } from 'antd';

import '../../i18n/config';
import { useTranslation, Trans } from 'react-i18next';

const { Title } = Typography;


const navItems = [
  { title: 'Test 1', content: 'Layout & Style' },
  { title: 'Test 2', content: 'Form & Table' },
];

type navProps = {
  title: string;
  description: string;
};

const App: React.FC = () => {
  const count = 3;
  const { t, i18n, ready } = useTranslation();

  if (!ready) return "loading translations...";

  const navItems: navProps[] = t('navItems', { returnObjects: true });


  return (
    <div className="App">
      {/* <p>{t('title', { name: 'John' })}</p>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p> */}
      {/* <Trans i18nKey="userMessagesUnread" count={count}>
        You have {{ count }} unread message.
      </Trans> */}
      <header className="App-header">
        <Row className="Nav"  justify="center">
          {navItems.map(({title, description}: navProps) => (
            <Col
              xs={{ span: 4}}
              className="Nav-item"
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


