import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const styles = {
  profileImg:{
    height:"100px",
    width: "100px",
    borderRadius: "50%",
  }
}

export default class About extends Component {
  render() {
    return (
      <div>
        <Container id='about' className='mt-5 pt-5'>
           
            <h1>About Me</h1>
            <Row>
                <Col md={2}>
                    <img style={styles.profileImg} src={process.env.PUBLIC_URL + './profile.jpg'}  alt="Profile" />
                </Col>
                <Col md={0}>
                    <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
                    </p>
               </Col>
            </Row>
        </Container>
     </div>
    )
  }
}
