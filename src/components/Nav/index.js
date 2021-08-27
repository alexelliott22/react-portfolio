import React from "react";

function Nav({setNavSelected}) {


    return (
        <header>
            <nav className="website-navigation">
                <ul>
                    <li onClick={() => setNavSelected('about-me')}>
                        <button>ABOUT</button>
                    </li>
                    <li onClick={() => setNavSelected('projects')}>
                        <button>PROJECTS</button>
                    </li>
                    <li onClick={() => setNavSelected('contact-me')}>
                        <button>CONTACT</button>
                    </li>
                    <li onClick={() => setNavSelected('resume')}>
                        <button>RESUME</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;