import React from 'react';

import Profile from '../Profile/Profile';
import Talents from '../Talents/Talents';

function About (){    
        return(
            <div className="About">
                <div className='container'>
                    <div className='grid'>
                        <h1>About</h1>
                        <Talents/>
                        <Profile/>
                    </div>
                </div>
            </div>
        )
}

export default About;