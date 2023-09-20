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

const App: React.FC = () => {
const { t } = useTranslation();
const count = 3;
  return (
    <div className="App">
           <p>{t('title', { name: 'John' })}</p>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
      <Trans i18nKey="userMessagesUnread" count={count}>
        You have {{ count }} unread message.
      </Trans>
      <header className="App-header">
        <Row className="Nav"  justify="center">
          {navItems.map((item, index) => (
            <Col
              xs={{ span: 4}}
              className="Nav-item"
              key={index}
            >
              <Title level={5} className="title">
                {item.title}
              </Title>
              {item.content}
            </Col>
         ))}
        </Row>
        <Counter />
      </header>
      
    </div>
  );
};

export default App;


