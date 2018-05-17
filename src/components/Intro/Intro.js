import React from 'react';

function Intro (props){    
        return(
            <div className="Intro">
                 <h1>Hello! I am Alan Curtis. <br/> Full Stack Web Developer</h1>
                 <button onClick={()=>props.handleScroll('About')}>My Work</button>
            </div>
        )
}

export default Intro;