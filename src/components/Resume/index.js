import React, {useState} from 'react';

function Resume() {
    return (
        <section>
            <h1>Resume</h1>
            <h2>Download my <a href='https://docs.google.com/document/d/1Swh3PGCjoJ3obQPsCcFIUIKQKSWq3Fof/edit?usp=sharing&ouid=113786967365539175576&rtpof=true&sd=true'>Resume</a></h1>
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