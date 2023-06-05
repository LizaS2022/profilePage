import React from 'react'
import Card from 'react-bootstrap/Card';
import Projects from "./Projects.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import {Container, Row, Col} from 'react-bootstrap'

export default function Portfolio (){
    return (
      <div>
        <Container id='portfolio'>
            <Row>
                {Projects.map((project) => (
                    <Col xs={12} md={6} lg={3} key={project.id}>
                        <Card style={{ width: "100%", marginBottom:"20px"}}>
                            <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Img className='cardImg' variant="top" src={project.projectImg}/>
                            <a href={project.GitHubLink} className="text-black ml-3 p-2"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href={project.DeployedURL} className="text-white ml-3 p-2 herokuImg"><img className='herokuImg' src={process.env.PUBLIC_URL + './heroku.png'} alt="Heroku Icon"/></a>
                            </Card.Body>
                        </Card>
                </Col>
                ))}
            </Row>
        </Container>
      </div>
    );
  }

