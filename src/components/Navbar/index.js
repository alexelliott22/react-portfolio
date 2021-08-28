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
        </header>
    )
}

export default Navbar;