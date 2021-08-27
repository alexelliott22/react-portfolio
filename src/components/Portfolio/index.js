import React, {useEffect} from "react";

function Portfolio() {
    const projects = [
        {
            name: 'State of the Art',
            description: 'This is a full stack web application that allows museum curators to locate pieces of art across the globe.',
            github: 'https://github.com/alexelliott22/ArtFiles2',
            deployedLink: 'https://state-of-art.herokuapp.com/',
            img: '../../assets/imgs/mona-lisa.jpg'
        },
        {
            name: 'Link Up',
            description: 'This is a front end application that allows the user to find various activities available near them.',
            github: 'https://github.com/alexelliott22/Group-project-1',
            deployedLink: 'https://alexelliott22.github.io/Group-project-1/',
            img: '../../assets/imgs/chain.jpg'
        },
        {
            name: 'Employee Manager',
            description: 'This command-line application allows an employer to input the members of their team and when they are finished an HTML page is generated with all their information.',
            github: 'https://github.com/alexelliott22/employee-content-management',
            deployedLink: 'https://github.com/alexelliott22/employee-content-management',
            img: '../../assets/imgs/employees.jfif'
        },
        {
            name: 'Weather Dashboard',
            description: 'This web based application helps a user frind the weather in any given city they are searching for along with a 5 day forcast for that city as well.',
            github: 'https://github.com/alexelliott22/weather-dashboard',
            deployedLink: 'https://alexelliott22.github.io/weather-dashboard/',
            img:'../../assets/imgs/weather.png'
        },
        {
            name: 'Socail Network API',
            description: 'This project built an api system for a social network site that allows for users to be created, add other users as friends, create posts, and add reactions to those posts.',
            github: 'https://github.com/alexelliott22/social-network-api',
            deployedLink: 'https://github.com/alexelliott22/social-network-api',
            img: '../../assets/imgs/computer.jpg'
        }

    ]

    return (
        <section>
            <ul>
                {projects.map((project) => (
                    <li>
                        <a href={project.deployedLink} target="_blank">
                            <img src={project.img} alt={project.name} />
                        </a>
                        <p>{project.name}</p>
                        <p className="github-link"><a href={project.github}>Github Repo</a></p>
                        <p className="description">{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Portfolio;