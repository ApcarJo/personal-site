
import React from 'react';
import jlapic from '../../img/Jl_VCTL2.png'

const About = () => {

    return (
        <div className="viewAbout">
            <div className="content row">
                <img className="pic" src={jlapic}/>
                <div className="text1">
                    <p>Born as a computer geek and passionate about new technologies, my life has always been around computers. My professional career began as a video maker, and I have been acquiring knowledge and skills to a more technical role since then. In the next step of my career I would love to contribute to make the world a better place, help companies embrace new technologies and develop good practices doing the right things in the long term goals to focus on doing the things right in short term goals.
                    </p>
                    <p>I am father, husband, pet partner, archer, horseman, football, padel, cyclist and volley player.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;