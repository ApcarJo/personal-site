
import React from 'react';
import Projects from '../Projects/Projects';
import About from '../About/About'
import Contact from '../Contact/Contact'

const Home = () => {

    return(
        <div className="viewHome">
            <Projects/>
            <About/>
            <Contact/>
        </div>
    )
}

export default Home;