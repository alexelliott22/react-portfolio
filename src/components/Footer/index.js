import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {HiOutlineMail} from 'react-icons/hi';
import {FaLinkedin} from 'react-icons/fa';
import {GrGithub} from 'react-icons/gr';

function Footer() {
    return (
            <Container className='text-center footer' fluid={true}>
                <Row className=' p-3 justify-content-center'>
                    <Col lg={12} className='p-0'>
                    <h2 className='footer-title'>Contact</h2>
                    </Col>

                    <Col lg={1} className='p-0'>   
                        <a href="https://www.linkedin.com/in/alex-elliott-cpa/" className="footer-icons" target='_blank' rel='noreferrer'><FaLinkedin /></a>
                    </Col>

                    <Col lg={1} className='p-0'>
                        <a href="https://github.com/alexelliott22" className="footer-icons" target='_blank' rel='noreferrer'><GrGithub /></a>                
                    </Col>
                    
                    <Col lg={1} className='p-0'>
                        <a href="mailto:alexelliott22@gmail.com" className="footer-icons"><HiOutlineMail /></a>
                    </Col>
                    
                    <Col lg={1} className='p-0'>
                        <a href="tel:+1 6152900839" className="phone">(615)290-0839</a>
                    </Col>
                    
                </Row>
            </Container>
    )
}

export default Footer;