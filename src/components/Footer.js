import React, { Component } from 'react'
import { Container,Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
  render() {
    return (
      <div>
         <footer className="footer mt-auto py-3 bg-dark text-white">
            <Container>
                <Row>
                    <Col>
                        <div className='d-flex justify-content-center'>
                            <a href="wwww.google.com" className="text-white mr-3 p-2"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="www.yahoo.com" className="text-white ml-3 p-2"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="www.yahoo.com" className="text-white ml-3 p-2"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                        <div className="mb-2 text-center">
                            <small>&copy; {new Date().getFullYear()} ES</small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
      </div>
    )
  }
}
