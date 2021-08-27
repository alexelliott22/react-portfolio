import React, {useState} from 'react';

function Resume() {
    return (
        <section>
            <h1>Resume</h1>
            <h2>Download my <a href='https://drive.google.com/uc?id=1YlODbeJvfQpvWbISIg2M8MP02QtCrl5V&export=download'>Resume</a></h2>
    
            <h2>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
            </ul>
            
            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>Node.js</li>
                <li>APIs</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
            </ul>
        </section>
    )
}

export default Resume;