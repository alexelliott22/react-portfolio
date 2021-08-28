import React from 'react';

function Footer() {
    return (
        <footer id='contact-me'>
            <div>
                <h2>CONTACT</h2>
            </div>
            <nav className="contact">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/alex-elliott-cpa/" className="linkedin" target='_blank' rel='noreferrer'>Linkedin</a>
                    </li>
                    <li>
                        <a href="https://github.com/alexelliott22" className="github" target='_blank' rel='noreferrer'>Github</a>
                    </li>
                    <li>
                        <a href="mailto:alexelliott22@gmail.com" className="email">alexelliott22@gmail.com</a>
                    </li>
                    <li>
                        <a href="tel:+1 6152900839" className="phone">(615)290-0839</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;