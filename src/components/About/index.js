import React from 'react';
import profilePic from '../../assets/imgs/pro-pic.jpg';

function About() {
    return (
        <section id="about-me">
            <h2>ABOUT ME</h2>
            <div> 
                <img src={profilePic} alt="headshot" />
                <p>
                    Front-end web developer leveraging an accouting background to build a more intuitive user experience on the web. Recently earned a certificate in full stack development from the Vanderbilt University, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                </p>
            </div>
        </section>
    )
}

export default About;