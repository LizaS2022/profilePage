import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

const styles = {
  profileImg: {
    height: "120px",
    width: "120px",
    borderRadius: "50%",
  },
};

export default class About extends Component {
  render() {
    return (
      <div>
        <Container id="about" className="mt-5 pt-5">
          <h1>About Me</h1>
          <Row className="mb-3">
            <Col>
              <img
                style={styles.profileImg}
                src={process.env.PUBLIC_URL + "./profile.jpg"}
                alt="Profile"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Having a strong foundation in education, I am passionately
                transitioning into the tech industry, eager to apply my
                problem-solving skills in a new context. I have recently
                completed an intensive Full Stack Development bootcamp at
                Georgia Tech, where I honed my abilities in modern technologies
                such as JavaScript, React, Node.js, and more. My background in
                education has instilled in me the importance of continuous
                learning, collaboration, and effective communication, all of
                which are crucial in the world of software development. Now, I
                am eager to start my journey as an entry-level full stack
                developer, keen on bringing fresh perspectives to the table and
                eager to contribute my learned skills to a dynamic and
                innovative team.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
