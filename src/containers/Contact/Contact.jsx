
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

    const [guest, setGuest] = useState({
        guestMessage: [],
    });

    //Handler
    const updateMsg = (e) => {
        setMsg({...msg, [e.target.name]: e.target.value})
    }

    useEffect(()=>{
        guestBook();
    },[]);

    useEffect(()=>{

    });

    const send = async () => {
        let body = {
            name: msg.name,
            email: msg.email,
            message: msg.message
        }

        let res = await axios.post('https://guestbookpw.herokuapp.com/message', body);

        setTimeout(()=>{
            history.push(`/`);
        },750);
    }

    const guestBook = async () => {

        let array=[];
        let res = await axios.get('https://guestbookpw.herokuapp.com/message');

        
        for (let i=0; i<res.data.length; i++){
            array.push(
                <div className="signature">
                    <p>{res.data[i].name}</p>
                    <p>{res.data[i].message}</p>
                </div>);
        }
        setGuest({...guest, guestMessage: array});
 
    }

    return (
        <div className="viewContact">
            <div className="content">
                <h3>Hi again my friend! </h3>
                {/* <pre>{JSON.stringify(msg, null,2)}</pre> */}
                <div className="form">

                    <input class="text" name="name" type="text" onChange={updateMsg} id="nombreContact" required="true" placeholder="Name"></input>

                    <input class="text" name="email" type="text" onChange={updateMsg} id="emailContact" placeholder="Email"></input>

                    <textarea class="text textMessage" name="message" type="text" onChange={updateMsg} id="textContact" placeholder="Your message"></textarea>

                    <button class="send" name="enviar" id="enviarContact" onClick={()=>send()}>Send</button>
                </div>

                {/* <div className="guestBook">
                {guest.guestMessage.map((val, index)=>(
                    <div className="guestCards">
                    <div>{val.name}</div>
                    <div>{val.message}</div>
                    </div>
                ))}
                </div> */}
            </div>
        </div>
    )
}

export default Contact;