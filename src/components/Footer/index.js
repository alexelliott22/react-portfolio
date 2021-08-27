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
                        <a href="https://www.linkedin.com/in/alex-elliott-cpa/" class="linkedin">Linkedin</a>
                    </li>
                    <li>
                        <a href="https://github.com/alexelliott22" class="github">Github</a>
                    </li>
                    <li>
                        <a href="mailto:alexelliott22@gmail.com" class="email">alexelliott22@gmail.com</a>
                    </li>
                    <li>
                        <a href="tel:+1 6152900839" class="phone">(615)290-0839</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}