import './App.scss';
import { Col, Row } from 'antd';
import { Counter } from '../Counter/Counter';
import { Typography } from 'antd';

const { Title } = Typography;

const App: React.FC = () => {
  const navItems = [
    { title: 'Test 1', content: 'Layout & Style' },
    { title: 'Test 2', content: 'Connect API' },
    { title: 'Test 3', content: 'Form & Table' },
  ];

  return (
    <div className="App">
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


