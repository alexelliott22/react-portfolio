import React from "react";
import {Card, Col, Row, Container} from 'react-bootstrap';
import {Github, Deploy} from './ProjectElements';

function Portfolio() {
    const projects = [
        {
            name: 'State of the Art',
            description: 'This is a full stack web application that allows museum curators to locate pieces of art across the globe.',
            github: 'https://github.com/alexelliott22/ArtFiles2',
            deployedLink: 'https://state-of-art.herokuapp.com/',
            img: require('../../assets/website-imgs/mockup.png').default
        },
        {
            name: 'Link Up',
            description: 'This is a front end application that allows the user to find various activities available near them.',
            github: 'https://github.com/alexelliott22/Group-project-1',
            deployedLink: 'https://alexelliott22.github.io/Group-project-1/',
            img: require('../../assets/website-imgs/link-up.png').default
        },
        {
            name: 'Fixed Asset Subledger',
            description: 'This project allows the user to add assets to a subledger that tracks their monthly depreciation expense as well as summing their accumulated depreciation.',
            github: 'https://github.com/alexelliott22/Subsidiary-Ledger',
            deployedLink: 'https://github.com/alexelliott22/employee-content-management',
            img: require('../../assets/website-imgs/fixed-asset-subledger.png').default
        },
        {
            name: 'Weather Dashboard',
            description: 'This web based application helps a user frind the weather in any given city they are searching for along with a 5 day forcast for that city as well.',
            github: 'https://github.com/alexelliott22/weather-dashboard',
            deployedLink: 'https://fa-subledger-747.herokuapp.com/',
            img: require('../../assets/website-imgs/weather-dash.PNG').default
        },
        {
            name: 'Social Network API',
            description: 'This project built an api system for a social network site that allows for users to be created, add other users as friends, create posts, and add reactions to those posts.',
            github: 'https://github.com/alexelliott22/social-network-api',
            deployedLink: 'https://github.com/alexelliott22/social-network-api',
            img: require('../../assets/website-imgs/social-network.PNG').default
        },
        {
            name: 'Tech Blog',
            description: 'This is a website that allows users to post and update blogs about the tech world. It also allows them to read and interact with other users blogs on the same site. This website brings together people from all backgrounds to share about their love of technology!',
            github: 'https://github.com/alexelliott22/tech-blog',
            deployedLink: 'https://tech-blog-5587.herokuapp.com/',
            img: require('../../assets/website-imgs/tech-blog.PNG').default
        }

    ]

    return (
        <section id='projects'>
            <Container>
                <Row className="g-4 justify-content-center p-5">
                    {projects.map((project) => (
                        <Col lg={4} md={6} sm={12} key={project.name} className='justify-content-center'>
                            <Card style={{ width: '18rem' }} className='justify-content-center'>
                                <Card.Img variant="top" src={project.img} alt={project.name} className='card-img-top'/>
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className='project-links'>
                                    <Card.Link href={project.github} 
                                    target="_blank" rel='noreferrer' className='justify-content-center'  
                                    ><Github /></Card.Link>

                                    <Card.Link href={project.deployedLink} target="_blank" rel='noreferrer' className='justify-content-center' 
                                    ><Deploy /></Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Portfolio;