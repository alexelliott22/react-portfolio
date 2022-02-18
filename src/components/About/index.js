import React from 'react';
import profilePic from '../../assets/imgs/pro-pic.jpg';
import {Container, Row, Col} from 'react-bootstrap';

function About() {
    return (

        <Container id="about-me" fluid={true} className='justify-content-start align-content-center align-middle'>
            <Row className='about-content'> 
                <Col lg={12} className='text-center title'>
                    <h2>About Me</h2>
                </Col>
                <Col lg={4}>
                    <img src={profilePic} alt="headshot" />
                </Col>
                <Col lg={8} className='d-flex align-items-center justify-content-center text-center'>
                    <p >
                        Front-end web developer leveraging an accounting background to build a more intuitive user experience on the web. Recently earned a certificate in full stack development from the Vanderbilt University, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                    </p>
                </Col>

            </Row>
        </Container>
    )
}

export default About;
