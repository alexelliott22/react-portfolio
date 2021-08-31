import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FaLinkedin, FaTwitterSquare} from 'react-icons/fa';
import {GrGithub} from 'react-icons/gr';

function Footer() {
    return (
            <Container className='text-center footer' fluid={true}>
                <Row className=' p-3 justify-content-center'>
                    <Col lg={12} className='p-0'>
                    <h2 className='footer-title'>Socials</h2>
                    </Col>

                    <Col lg={1} md={4} className='p-0'>   
                        <a href="https://www.linkedin.com/in/alex-elliott-cpa/" className="footer-icons" target='_blank' rel='noreferrer'><FaLinkedin /></a>
                    </Col>

                    <Col lg={1} md={4} className='p-0'>
                        <a href="https://github.com/alexelliott22" className="footer-icons" target='_blank' rel='noreferrer'><GrGithub /></a>                
                    </Col>
                    
                    <Col lg={1} md={4} className='p-0'>
                        <a href="https://twitter.com/alexelliott6" className="footer-icons" target='_blank' rel='noreferrer'><FaTwitterSquare /></a>
                    </Col>
                    
                </Row>
            </Container>
    )
}

export default Footer;