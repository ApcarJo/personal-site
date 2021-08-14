
import React from 'react';

import Button from '../Button/Button';

const Header = () => {

    return (
        <div className="viewHeader">
            <div className="container">
                    <Button path="/" destination="Home" />
                    <Button path="/about" destination="About Me" />
                    <Button path="/projects" destination="Projects" />
                    <Button path="/contact" destination="Contact" />
            </div>
        </div>
    )
}

export default Header;