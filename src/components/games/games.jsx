import React, { useState } from "react";
import Circle from "./circle";
import GameButton from "./gamesButton";
import { Container, Row, Col } from "react-bootstrap";

const Games = () => {
  const [circles, setCircles] = useState([]);

  const incrementCircle = () => {
    const newCircle = circles.length + 1;
    setCircles([...circles, newCircle]);
  };
  const decrementCircle = () => {
    if (circles.length > 0) {
      const newCircles = circles.slice(0, -1);
      setCircles(newCircles);
    }
  };
  const resetCircles = () => {
    setCircles([]);
  };
  return (
    <Container>
      <Row>
          <Col md={10} className="home-about-description">
            <h1 style={{ fontSize: "2.4em" }}>
            NUMBERED<span className="purple"> CIRCLE </span>GENERATOR COMPONENT 
            </h1>
            <p className="home-about-body">
            A <b className="purple"> "Numbered Circle Generator" </b> in React.js typically refers to a component or functionality that generates a list of items with numbered circles. 
              <br />
              <br /> Each item in the list has a circle with a number, creating a visual guide for the user.
              <i>
                <b className="purple"> The major components of Numbered Circle Generator are given below: </b>
              </i>
              
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col xs={3} md={1} className="text-white tech-icons"><i className="fa fa-circle"></i></Col>
          <Col xs={3} md={1} className="text-white tech-icons"><i className="fa fa-plus"></i></Col>
          <Col xs={3} md={1} className="text-white tech-icons"><i className="fa fa-minus"></i></Col>
          <Col xs={3} md={1} className="text-white tech-icons"><i className="fa fa-refresh"></i></Col>
        </Row>
      <div className="container mt-1 card-body bg-light shadow bg-white rounded">
        <div className="text-center mb-4 bg-success rounded-top text-white navbar-brand p-2">
          <b>Numbered Circle Generator</b>
        </div>
        <div className="text-center mb-4">
          <GameButton
            icon="plus"
            onClick={incrementCircle}
            variant="primary"
          />
          <b className="text-white bg-warning p-2 rounded">{circles.length}</b>
          <GameButton
            icon="minus"
            onClick={decrementCircle}
            variant="secondary"
            disabled={circles.length === 0}
          />
          <GameButton
            icon="refresh"
            onClick={resetCircles}
            variant="danger"
            disabled={circles.length === 0}
          />
        </div>
        <div className="text-center">
          {circles.length === 0 ? (
            <p>No circles to display</p>
          ) : (
            <div className="mt-4">
              {circles.map((circle, index) => (
                <Circle key={index} circle={circle} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Row style={{ justifyContent: "center" }}>
          <Col xs={3} md={1} className="text-white tech-icons"><i class="fa fa-smile-o"></i></Col>
        </Row>
    </Container>
  );
};

export default Games;
