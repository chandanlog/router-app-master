import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../Images/react-router.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2 =()=> {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> REACT-ROUTER
            </h1>
            <p className="home-about-body">
            React Router refers to the standard library used for routing in React.
              <br />
              <br /> It permits us for building a single-page web application in React with navigation without even refreshing the page when the user navigates.
              <i>
                <b className="purple"> The major components of React Router are given below: </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="text-white tech-icons"><h1>BrowserRouter</h1></Col>
          <Col xs={4} md={2} className="text-white tech-icons"><h1>Routes</h1></Col>
          <Col xs={4} md={2} className="text-white tech-icons"><h1>Route</h1></Col>
          <Col xs={4} md={2} className="text-white tech-icons"><h1>Link</h1></Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chandanlog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Chandan58732024?t=s79dczuDJMThsdOKsLrI8g&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chandan-kumar-mahto-997497185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/__mrchandan__?igshid=NTA5ZTk1NTc="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home2;
