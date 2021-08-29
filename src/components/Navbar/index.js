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
                    <NavLink to='/projects' activeStyle={{color: '#15cdfc'}}>
                        Projects
                    </NavLink>
                    <NavLink to='/contact' activeStyle={{color: '#15cdfc'}}>
                        Contact
                    </NavLink>
                    <NavLink to='/resume' activeStyle={{color: '#15cdfc'}}>
                        Resume
                    </NavLink>
                </NavMenu>
            </Nav>
        </header>
    )
}

export default Navbar;