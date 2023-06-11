
import React, { Component } from 'react'
import Skills from "./skills.js";
import {Row,Col,Card,Container} from 'react-bootstrap'

const styles ={
list: {
  listStyleType: "none",
},
skill: {
lineHeight:"2",
},
download: {
  marginBottom: "2",
}
}
export default class Resume extends Component {
  render() {
    return (
        <Container id='resume' className='mt-5 pt-5'>
          <Row className="justify-content-md-center text-center">
            <Col md={6}>
              <h1>Resume</h1>
              <a href="/samplePDF.pdf" download>
              <span className='download'>Download Resume</span>
              </a>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Front-end Proficiencies</Card.Title>
                  <ul className='list' style={styles.list}>
                    {Skills.map((skill, index) => (
                      skill.frontendSkills.map((frontendSkill, skillIndex) =>(
                        <li className='skill' style={styles.skill} key={skillIndex}>{frontendSkill}</li>
                      ))
                    ))}
            
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                    <Card.Title>Back-end Proficiencies</Card.Title>
                      <ul className='list' style={styles.list}>
                          {Skills.map((skill, index) => (
                              skill.backendSkills.map((backendSkill, skillIndex)=>(
                                <li className='skill' style={styles.skill} key={skillIndex}>{backendSkill}</li>
                              ))
                           ))}
                      </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
