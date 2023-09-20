import './Test1.scss';
import { Col, Row } from 'antd';
import { Typography } from 'antd';

import React, { useState, useEffect } from 'react';

const { Title } = Typography;
const controller = ['Left', ['Up', 'Down'], 'Right'];
const initialShapes = [['squre', 'circle', 'oval'] , ['trapezoid', 'rectangle', 'rhombus']];

interface Test1Props {
}

const buttonFunctions: { [key: string]: () => void } = {
  Left: () => {
    console.log('Left button clicked');
  },
  Up: () => {
    console.log('Up button clicked');
  },
  Down: () => {
    console.log('Down button clicked');
  },
  Right: () => {
    console.log('Right button clicked');
  },
};

const Test1: React.FC<Test1Props> = (props) => {

  const [shapes, setShapes] = useState(initialShapes);

  const popShapes = () => {
    const flattenedShapes = shapes.flat();
    console.log(flattenedShapes)
    flattenedShapes.shift();
    const newShapes = [];
    while (flattenedShapes.length > 0) {
      newShapes.push(flattenedShapes.splice(0, initialShapes[0].length));
    }

    setShapes(newShapes);
  };


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
            // onClick={buttonFunctions[column]}
            onClick={() => {
            if (Array.isArray(column)) {
              column.forEach((button) => buttonFunctions[button]());
            } else {
              buttonFunctions[column]();
            }
          }}
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