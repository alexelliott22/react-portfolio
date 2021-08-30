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

function Navbar() {


    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo  to='/'>Alex</NavLogo>

                    <Bars />
    
                    <NavMenu>
                        <NavItem>
                            <NavLink to='/projects'>
                                Projects
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='/contact'>
                                Contact
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='/resume'>
                                Resume
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
  

            </Nav>
        </>
    )
}

export default Navbar;