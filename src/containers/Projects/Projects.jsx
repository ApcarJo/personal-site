
import React, { useState, useEffect } from 'react';
import {projectsdb} from './Projectsdb.js';
import project1 from '../../img/n64_controller.png';
import project2 from '../../img/project2.png';
import project6 from '../../img/datepicker.jpg';

const Projects = () => {

    //HOOKS
    const [show, setShow] = useState({
        view: 'hideBox',
    });

    const [card, setCard] = useState({
        cardNumber: '0',
    });

    //HANDLERS
    const updateShow = (e) => {
        setShow({ ...show, [e.target.name]: e.target.value })
    }

    useEffect(() => {

    }, []);

    useEffect(() => {

    });

    const thumbnails = [project1, project2, project6]


    // DATABASE OF THE PROJECTS, ARRAY OF OBJECTS

    const updateView = (e) => {
        (show.view == 'hideBox') ? setShow({ ...show, view: 'card' }) : setShow({ ...show, view: 'hideBox' })
    }

    return (
        <div className="viewProjects">
            <div className="grid">
                {thumbnails.map((val, index) => (
                    <div className="thumbnail" key={index}>
                        <img className="size" src={val} onClick={() => updateView("card")} alt="picture" />
                    </div>
                ))}
            </div>
            <div className="grid">
                {projectsdb.map((val, index) => (
                    <div className={show.view}>
                        <div className="info">
                            <h1 className="title">{val.title}</h1>
                            <h4> {val.description} </h4>
                            <p> {val.hours}</p>

                            <div className="row">
                                <div className="languages">
                                    {val.codes.map((cod, ind) => (
                                        <div className="code">{cod}</div>
                                    ))}
                                </div>
                                <div className="measures">
                                    {val.percs.map((perc, indx) => (
                                        <div className="bar" style={{ width: perc }}>{perc}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="github">
                                <a className="link" href={val.link} target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}

export default Projects;