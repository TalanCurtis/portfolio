import React from 'react';
import {TweenLite, TimelineMax} from 'gsap';
import Waypoint from 'react-waypoint';


import Profile from '../Profile/Profile';
import Talents from '../Talents/Talents';

function About (){  
        let titlePlayed = false; 
        function animateTitle(){
            console.log('animate title')
            if (!titlePlayed){
                const tl = new TimelineMax().delay(.5)
                tl
                .to('.title', 1, {opacity:1 , x:0 } )
                titlePlayed = true
            }
        } 

        function animateTalents(){
            console.log('animate Talents')
            const tl = new TimelineMax().delay(.5)
            tl
            .staggerTo('.Talents div', 1, {opacity:1}, .5 )
            .staggerTo('.Talents div svg', 1, {rotationY: 0}, .5, '-=1.75')
        } 
        function animateProfile(){
            console.log('animate profile')
            const tl = new TimelineMax().delay(.5)
            tl
            .to('.Profile', 1, {opacity: 1, x:0} )
        } 
        return(
            <div className="About">
                <div className='container'>
                    <div className='grid'>
                        <Waypoint onEnter={()=>animateTitle()} bottomOffset='0%' >
                            <h1 className='title'>About</h1>
                        </Waypoint>
                        <Waypoint onEnter={()=>animateTalents()} bottomOffset='50%' >
                            <div>
                                <Talents/>
                            </div>
                        </Waypoint>
                        <Waypoint onEnter={()=>animateProfile()} bottomOffset='50%' >
                            <div>
                                <Profile/> 
                            </div>
                        </Waypoint>
                    </div>
                </div>
            </div>
        )
}

export default About;