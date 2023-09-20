import './Test1.scss';
import React, { useState, useEffect } from 'react';

import { Col, Row } from 'antd';
import { Typography } from 'antd';


const { Title } = Typography;

const controller = ['Left', ['Up', 'Down'], 'Right'];
const initialShapes = [['squre', 'circle', 'oval'] , ['trapezoid', 'rectangle', 'rhombus']];

const moveShapes = (direction: string, shapes: string[][], setShapes: (shapes: string[][]) => void) => {
  const flattenedShapes = shapes.flat();
  let removedShape: string;

  switch (direction) {
    case 'Left':
      removedShape = flattenedShapes.shift()!;
      flattenedShapes.push(removedShape);
      break;

    case 'Up':
    case 'Down':
      const newShapes = [shapes[1], shapes[0]];
      setShapes(newShapes);
      return;

    case 'Right':
      removedShape = flattenedShapes.pop()!;
      flattenedShapes.unshift(removedShape);
      break;

    default:
      return;
  }

  const newShapes = [];
  while (flattenedShapes.length > 0) {
    newShapes.push(flattenedShapes.splice(0, shapes[0].length));
  }

  setShapes(newShapes);
};

const Test1: React.FC = (props) => {

  const [shapes, setShapes] = useState(initialShapes);

  const buttonFunctions: { [key: string]: () => void } = {
    Left: () => moveShapes('Left', shapes, setShapes),
    Up: () => moveShapes('Up', shapes, setShapes),
    Down: () => moveShapes('Down', shapes, setShapes),
    Right: () => moveShapes('Right', shapes, setShapes),
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
            onClick={() => {
                 if (!Array.isArray(column)) {
                   buttonFunctions[column]();
                 }          
            }}
          >
         {Array.isArray(column) ? (
            column.map((button) => (
              <div key={button} onClick={() => {
                buttonFunctions[button]();
              }}> 
                {button} 
              </div>
            ))
          ) : (
            column
          )}
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