import React from 'react';

import Profile from '../Profile/Profile';
import Skills from '../Skills/Skills';
import Talents from '../Talents/Talents';

function About (){    
        console.log('component mounted')
        return(
            <div className="About">
                <div className='container'>
                    <div className='grid'>
                        <h1>About</h1>
                        <Talents/>
                        <Profile/>
                        <Skills/>
                    </div>
                </div>
            </div>
        )
}

export default About;