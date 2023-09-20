import './Test1.scss';
import { Col, Row } from 'antd';
import { Typography } from 'antd';

import React, { useState, useEffect } from 'react';

const { Title } = Typography;
const controller = ['Left', ['Up', 'Down'], 'Right'];
const initialShapes = [['squre', 'circle', 'oval'] , ['trapezoid', 'rectangle', 'rhombus']];

interface Test1Props {
}

const Test1: React.FC<Test1Props> = (props) => {
      const [shapes, setShapes] = useState(initialShapes);

  // Function to shuffle the shapes array randomly
  const shuffleShapes = () => {
    const flattenedShapes = shapes.flat();
    const shuffledShapes = [...flattenedShapes].sort(() => Math.random() - 0.5);
    const newShapes = [];

    while (shuffledShapes.length > 0) {
      newShapes.push(shuffledShapes.splice(0, initialShapes[0].length));
    }

    setShapes(newShapes);
  };

  return (
    <div>
        <Title>Layout & Style</Title>

        <Row className="Controller" justify="center">
        {controller.map((column, index) => (
          <Col
            key={index}
            xs={{ span: 4 }}
            className={`Controller-col ${Array.isArray(column) ? 'combined-col' : ''} ${
              Array.isArray(column) ? 'combined-btn' : column.toLowerCase() + '-btn'
            }`}
          >
            {Array.isArray(column) ? column.join('/') : column}
          </Col>
        ))}
        </Row>

        {shapes.map((row, rowIndex) => (
            <Row className="Shapes" justify="center">
             {row.map((shape, colIndex) => (
                <Col
                  key={colIndex}
                  xs={{ span: 4 }}
                  className={`Shape-col ${ shape.toLowerCase() + '-btn'}`}
                  onClick={shuffleShapes}
                >
                  {shape}
                </Col>
             ))}
            </Row>
        ))}
    </div>
  );
};

export default Test1;