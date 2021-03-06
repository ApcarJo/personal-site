
import React, { useState, useEffect } from 'react';
import { projectsdb } from './Projectsdb.js';
import project1 from '../../img/n64_controller.png';
import project2 from '../../img/project2.png';
import project3 from '../../img/selectionscreen.jpg';
import project6 from '../../img/datepicker.jpg';
import project7 from '../../img/searchresults.jpg';
import project8 from '../../img/laravel.svg';

const Projects = () => {

    //HOOKS
    const [show, setShow] = useState({
        view: 'hideBox',
        size: 'thumbnail',
        grid: 'gridBig',
        title: 'title'
    });

    const [card, setCard] = useState({
        ind: '0',
    });

    //HANDLERS
    const updateShow = (e) => {
        setShow({ ...show, [e.target.name]: e.target.value })
    }

    useEffect(() => {

    }, []);


    const thumbnails = [project1, project2, project3, project6, project7, project8]


    const updateView = (e) => {
        if (e === card.ind) {
            (show.view === 'hideBox') ? setShow({ ...show, view: 'card', size: 'small', grid: 'gridSmall', title: 'hidetitle' }) : setShow({ ...show, view: 'hideBox', size: 'thumbnail', grid: 'gridBig', title: 'title' })
        } else {
            setShow({ ...show, view: 'card', size: 'small', grid: 'gridSmall', title: 'hidetitle' })
            setCard({ ...card, ind: e });
        }
    }

    const closeCard = () => {
        setShow({ ...show, view: 'hideBox', size: 'thumbnail', grid: 'gridBig', title: 'title' })
    }


    return (
        <div className="viewProjects">
            <div className="content">
                <h3>Some of my finished projects at GeeksHubs Academy</h3>

                <div className={show.grid}>
                    {thumbnails.map((val, index) => (
                        <div className={show.size} key={index} onClick={() => updateView(index)}>
                            <p className={show.title}>{projectsdb[index].title}</p>
                            <img className="size" src={val} alt="picture" />
                        </div>
                    ))}
                </div>
                <div className={show.view}>
                    <div className="info">
                        <div className="close" onClick={() => closeCard()}>Close</div>
                        <div className="info2">
                            <h2 className="title">{projectsdb[card.ind].title}</h2>
                            <h4> {projectsdb[card.ind].description} </h4>
                            <p> {projectsdb[card.ind].hours}</p>

                            <div className="data">
                                <div className="languages">
                                    {projectsdb[card.ind].codes.map((cod, ind) => (
                                        <div className="code">{cod}</div>
                                    ))}
                                </div>
                                <div className="measures">
                                    {projectsdb[card.ind].percs.map((perc, indx) => (
                                        <div className="bar" style={{ width: perc }}>{perc}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="github">
                            <a className="link" href={projectsdb[card.ind].link} target="_blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Projects;