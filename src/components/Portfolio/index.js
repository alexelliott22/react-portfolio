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
            img: require('../../assets/imgs/mona-lisa.jpg').default
        },
        {
            name: 'Link Up',
            description: 'This is a front end application that allows the user to find various activities available near them.',
            github: 'https://github.com/alexelliott22/Group-project-1',
            deployedLink: 'https://alexelliott22.github.io/Group-project-1/',
            img: require('../../assets/imgs/chain.jpg').default
        },
        {
            name: 'Employee Manager',
            description: 'This command-line application allows an employer to input the members of their team and when they are finished an HTML page is generated with all their information.',
            github: 'https://github.com/alexelliott22/employee-content-management',
            deployedLink: 'https://github.com/alexelliott22/employee-content-management',
            img: require('../../assets/imgs/employees.jfif').default
        },
        {
            name: 'Weather Dashboard',
            description: 'This web based application helps a user frind the weather in any given city they are searching for along with a 5 day forcast for that city as well.',
            github: 'https://github.com/alexelliott22/weather-dashboard',
            deployedLink: 'https://alexelliott22.github.io/weather-dashboard/',
            img: require('../../assets/imgs/weather.png').default
        },
        {
            name: 'Socail Network API',
            description: 'This project built an api system for a social network site that allows for users to be created, add other users as friends, create posts, and add reactions to those posts.',
            github: 'https://github.com/alexelliott22/social-network-api',
            deployedLink: 'https://github.com/alexelliott22/social-network-api',
            img: require('../../assets/imgs/computer.jpg').default
        }

    ]

    return (
        <section id='projects'>
            <Container>
                <Row className="g-4 justify-content-center">
                    {projects.map((project) => (
                        <Col lg={4} md={6} sm={12} key={project.name} className='justify-content-center'>
                            <Card style={{ width: '18rem' }} className='justify-content-center'>
                                <Card.Img variant="top" src={project.img} alt={project.name}/>
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body style={{ margin: 'auto' }}>
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