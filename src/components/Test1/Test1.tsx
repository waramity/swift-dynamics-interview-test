import React from 'react';
import { Col, Row } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

interface Test1Props {
}

const Test1: React.FC<Test1Props> = (props) => {
  return (
    <div>
        <Row className="Nav"  justify="center">
            <Col
            xs={{ span: 4}}
            className="Nav-col"
            >
                hi

            </Col>
        </Row>
    </div>
  );
};

export default Test1;