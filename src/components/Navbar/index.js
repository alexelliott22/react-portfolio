import React from "react";
import { 
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements'

function Navbar() {


    return (
        <header>
            <Nav>
                <NavLink to='/'>
                    <h1>Alex</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/projects' activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to='/resume' activeStyle>
                        Resume
                    </NavLink>
                </NavMenu>
            </Nav>
            
            
            {/* <nav className="website-navigation">
                <ul>
                    <li onClick={() => setNavSelected('about-me')} className={`${navSelected === 'about-me' && 'navActive'}`}>
                        <button>ABOUT</button>
                    </li>
                    <li onClick={() => setNavSelected('projects')} className={`${navSelected === 'projects' && 'navActive'}`}>
                        <button>PROJECTS</button>
                    </li>
                    <li onClick={() => setNavSelected('contact-me')} className={`${navSelected === 'contact-me' && 'navActive'}`}>
                        <button>CONTACT</button>
                    </li>
                    <li onClick={() => setNavSelected('resume')} className={`${navSelected === 'resume' && 'navActive'}`}>
                        <button>RESUME</button>
                    </li>
                </ul>
            </nav> */}
        </header>
    )
}

export default Navbar;