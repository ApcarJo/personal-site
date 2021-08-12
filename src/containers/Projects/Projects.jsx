
import React, { useState, useEffect } from 'react';
import n64_controller from '../../img/n64_controller.png';

const Projects = () => {

    //HOOKS
    const [show, setShow] = useState({
        view: 'hideBox',
    });

    //HANDLERS
    const updateShow = (e) => {
        setShow({ ...show, [e.target.name]: e.target.value })
    }

    useEffect(() => {

    }, []);

    useEffect(() => {

    });

    const updateView = (e) => {
        (show.view == 'hideBox') ? setShow({ ...show, view: e }) : setShow({ ...show, view: 'hideBox' })
    }



    return (
        <div className="viewProjects">

            <div className="thumbnail" name="n64">
                <img className="size" src={n64_controller} onClick={() => updateView("card")} alt="picture" />
            </div>
            <div className={show.view}>
                <div className="info">
                    <h1 className="title">Nintendo64  Controller</h1>
                    <h4> First FullStack Developer project at GeeksHubs Academy</h4>
                    <p> 25 hours in 3 days</p>

                    <div className="row">
                        <div className="languages">
                            <div className="code">CSS3</div>
                            <div className="code">HTML5</div>
                        </div>
                        <div className="measures">
                            <div className="bar html1">80%</div>
                            <div className="bar css1">20%</div>
                        </div>

                    </div>
                    <div className="github">
                        <a className="link" href="https://github.com/ApcarJo/nintendo64" target="_blank">Github</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;