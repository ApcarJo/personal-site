
import React from 'react';

const Projects = () => {

    const updateview = () => {

    }

    return (
        <div className="viewProjects">
            <div className="card" onClick={updateview}>
                <div className="asa">
                    <img src="C:\Users\josep\Documents\AA_Cuentas y Documentos\AA_GeeksHub\Bootcamp\FSDValencia0421\Proyectos\Portfolio_ES6\portfolio\src\img\n64_controller.png" alt="logo2" />
                    <div className="info">
                        <h1 className="title">Nintendo64 Controller</h1>
                        <h4> First FullStack Developer project at GeeksHubs Academy</h4>

                        <div className="row">
                            <div className="languages">
                                <div>CSS3</div>
                                <div>HTML5</div>
                            </div>
                            <div className="measures">
                                <div className="bar html1">80%</div>
                                <div className="bar css1">20%</div>
                            </div>

                        </div>
                        <a className="link" href="https://github.com/ApcarJo/nintendo64">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;