
import React from 'react';
import linkedin from '../../img/Linkedin-símbolo.png'

const Contact = () => {

    return (
        <div className="viewContact">


            <form name="form">

                <input class="text" name="contact" id="nombreContact" required="true" placeholder="Name"></input>

                <input class="text" name="contact" id="emailContact" placeholder="Email"></input>


                <textarea class="text textMessage" name="contact" id="textContact" placeholder="Your message"></textarea>

                <button class="send" name="enviar" id="enviarContact">Send</button>
            </form>

            <img className="linklogo" src={linkedin}/>
        </div>

    )
}

export default Contact;