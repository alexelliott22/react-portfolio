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
                        <a href="#resume" target="_blank">RESUME</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;