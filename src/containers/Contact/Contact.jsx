
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
const Contact = () => {

    let history = useHistory();

    //Hook
    const [msg, setMsg] = useState({
        name:'',
        email:'',
        message:''
    });

    //Handler
    const updateMsg = (e) => {
        setMsg({...msg, [e.target.name]: e.target.value})
    }

    const send = async () => {
        let body = {
            name: msg.name,
            email: msg.email,
            message: msg.message
        }

        let res = await axios.post('http://localhost:3006/message', body)

        setTimeout(()=>{
            history.push(`/`);
        },750);
    }

    return (
        <div className="viewContact">
            <div className="content">
                <div className="intext"><h3>Hi again my friend, let's talk. </h3></div>
                {/* <pre>{JSON.stringify(msg, null,2)}</pre> */}
                <div className="form">

                    <input class="text" name="name" type="text" onChange={updateMsg} id="nombreContact" required="true" placeholder="Name"></input>

                    <input class="text" name="email" type="text" onChange={updateMsg} id="emailContact" placeholder="Email"></input>

                    <textarea class="text textMessage" name="message" type="text" onChange={updateMsg} id="textContact" placeholder="Your message"></textarea>

                    <button class="send" name="enviar" id="enviarContact" onClick={()=>send()}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;