import React from "react";
import { 
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavLogo,
    NavbarContainer,
    NavItem
} from './NavbarElements'

function Navbar({toggle}) {
    const url = '/react-portfolio'
    

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo  to={`${url}/`}>Alex</NavLogo>

                <Bars onClick={toggle} />

                <NavMenu>
                    <NavItem>
                        <NavLink to={`${url}/projects`}>
                            Projects
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to={`${url}/contact`}>
                            Contact
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to={`${url}/resume`}>
                            Resume
                        </NavLink>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>

        </Nav>
    )
}

export default Navbar;