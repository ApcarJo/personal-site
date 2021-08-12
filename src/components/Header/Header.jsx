
import React from 'react';

import Button from '../Button/Button';

const Header = () => {

    return (
        <div className="viewHeader">
            <div className="container">
                <p className="signature">José Luis Aparicio</p>
                <nav className="navBar">
                    <Button path="/" destination="Home" />
                    <Button path="/about" destination="About Me" />
                    <Button path="/projects" destination="Projects" />
                    <Button path="/contact" destination="Contacts" />
                </nav>

            </div>
        </div>
    )
}

export default Header;