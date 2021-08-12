
import React from 'react';

const Projects = () => {

    const updateview = () => {

    }

    return (
        <div className="viewProjects">

            <div className="thumbnail">
                
            </div>
            <div className="card">
                <div className="info">
                    <h1 className="title">Nintendo64 Controller</h1>
                    <h4> First FullStack Developer project at GeeksHubs Academy</h4>
                    <p> 25 hours in 3 days </p>

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
                        <a className="link" href="https://github.com/ApcarJo/nintendo64" target="_blank">Github Link</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;