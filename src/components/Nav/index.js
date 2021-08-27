import React, {useEffect} from "react";

function Nav(props) {

    return (
        <header>
            <nav className="website-navigation">
                <ul>
                    <li>
                        <a href="#about-me">ABOUT</a>
                    </li>
                    <li>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#contact-me">CONTACT</a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/document/d/1Swh3PGCjoJ3obQPsCcFIUIKQKSWq3Fof/edit?usp=sharing&ouid=113786967365539175576&rtpof=true&sd=true" target="_blank">RESUME</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;