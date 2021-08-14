
import React from 'react';
import gmail from '../../img/logo-gmail.png';
import github from '../../img/github2.png';
import linkedin from '../../img/Linkedin-símbolo.png'

const Footer = () => {

    return (
        <div className="viewFooter">
            <div className="infooter">
                <div>MIT License - José Luis Aparicio Personal Website</div>
                
                <div><img className="logogmail" src={gmail}/></div><div> hansokaz@gmail.com</div>
                <div><a className="footerlink" href="https://github.com/ApcarJo" target="_blank"> <img className="logogit" src={github}/></a></div>

                <div><a href="https://www.linkedin.com/in/apcarjo/" target="_blank"><img className="linklogo" src={linkedin}/></a></div>

            </div>
        </div>
    )
}

export default Footer;