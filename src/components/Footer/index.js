import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {HiOutlineMail} from 'react-icons/hi';
import {FaLinkedin} from 'react-icons/fa';
import {GrGithub} from 'react-icons/gr';

function Footer() {
    return (
        <footer id='contact-me' className='mt-5'>
            <Container className='text-center' fluid={true}>
                <Row className='border-top p-3'>
                    <Col lg={12} className='p-0'>
                    <h2>Contact</h2>
                    </Col>

                    <Col lg={12} className='p-0 '>   
                        <a href="https://www.linkedin.com/in/alex-elliott-cpa/" className="linkedin" target='_blank' rel='noreferrer' lg={4}><FaLinkedin /></a>
                    
                        <a href="https://github.com/alexelliott22" className="github" target='_blank' rel='noreferrer' lg={4}><GrGithub /></a>                
                    
                        <a href="mailto:alexelliott22@gmail.com" className="email" lg={4}><HiOutlineMail /></a>
                    
                        <a href="tel:+1 6152900839" className="phone" lg={12}>(615)290-0839</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;