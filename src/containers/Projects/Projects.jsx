
import React, { useState, useEffect } from 'react';
import project1 from '../../img/n64_controller.png';
import project2 from '../../img/project2.png';

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

    const thumbnails = ["project1", "project2"]

    const projects = [{
        title: "Nintendo64 Controller",
        description: "First project at GeeksHubs Academy",
        hours: "25 hours in 3 days",
        codes: ["CSS3", "HTML5"],
        percs: ["80%", "20%"],
        link: "https://github.com/ApcarJo/nintendo64"
    },
    {
        title: "Personal website Vanilla",
        description: "Second project at GeeksHubs Academy",
        hours: "20 hours in 2 days",
        codes: ["CSS3", "HTML5", "JS"],
        percs: ["27%", "66%", "7%"],
        link: "https://github.com/ApcarJo/PersonalWeb"
},
{
    title: "Static FightGame",
    description: "Third project at GeeksHubs Academy",
    hours: "35 hours in 4 days",
    codes: ["CSS3", "HTML5", "JS"],
    percs: ["40%", "17%", "43%"],
    link: "https://github.com/ApcarJo/FightGame"
},
{
    title: "Dental Clinic",
    description: "First FullStack Developer (frontend and backend) project at GeeksHubs Academy",
    hours: "75 hours in 3 weeks",
    codes: ["CSS3", "HTML5", "JS"],
    percs: ["12%", "1%", "87%"],
    link: "https://github.com/ApcarJo/Frontend-Dental-Clinic"
},
{
    title: "React MovieSuit",
    description: "Second FullStack Developer (frontend and backend) project at GeeksHubs Academy",
    hours: "75 hours in 3 weeks",
    codes: ["SCSS", "HTML5", "JS"],
    percs: ["9%", "2%", "89%"],
    link: "https://github.com/ApcarJo/FrontEnd_ReactMovieSuite"
},
{
    title: "Chat Game",
    description: "First Backend project with PHP Laravel, Composer, Docker at GeeksHubs Academy",
    hours: "35 hours in 4 days",
    codes: ["PHP", "BLADE", "SHELL"],
    percs: ["87%", "12%", "1%"],
    link: "https://github.com/ApcarJo/laravelpassport"
},

]

const updateView = (e) => {
    (show.view == 'hideBox') ? setShow({ ...show, view: e }) : setShow({ ...show, view: 'hideBox' })
}



return (
    <div className="viewProjects">
        {thumbnails.map((val, index)=>(
        <div className="thumbnail">
            <img className="size" src={val} onClick={() => updateView("card")} alt="picture" />
        </div>
        ))}
        <div className="grid">
        {projects.map((val, index)=>(
        <div className={show.view}>
            <div className="info">
                <h1 className="title">{val.title}</h1>
                <h4> {val.description} </h4>
                <p> {val.hours}</p>

                <div className="row">
                    <div className="languages">
                        {val.codes.map((cod, ind)=>(
                        <div className="code">{cod}</div>
                        ))}
                    </div>
                    <div className="measures">
                        {val.percs.map((perc, indx)=>(
                        <div className="bar" style={{width: perc}}>{perc}</div>
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