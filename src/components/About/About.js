import React from 'react';
import {TweenLite, TimelineMax, Power4, Back} from 'gsap';
import Waypoint from 'react-waypoint';

import Profile from '../Profile/Profile';
import Talents from '../Talents/Talents';
import LineSvg from '../../images/LineSvg';

function About() {
    function animate() {
        console.log('animate title')
        const tl =  new TimelineMax().delay(.5)
        tl
        .to('.sectionTitle .title', .75, {ease: Power4.easeOut, opacity:1 , x:0 } )
        .to('.sectionTitle svg', .75, {ease: Power4.easeOut, opacity:1 , x:0 }, '-=.45' )
        .staggerTo('.Talents div', .75, { ease: Power4.easeOut, opacity:1}, .25 , '-=.45')
        .staggerTo('.Talents div svg', .75, { ease: Power4.easeOut, rotationY: 0}, .25, '-=.8')
        .to('.Profile', .75, { ease: Power4.easeOut, opacity: 1, y:0}, '-=.45')
        .to('.Profile .container img', .75, { ease: Back.easeOut, opacity: 1, scale:1}, '-=.45' )
    }

    return (
        <div className="About">
            <Waypoint onEnter={() => animate()} bottomOffset='30%'>
                <div className='container'>
                    <div className='grid'>
                        <div className='sectionTitle'>
                            <h1 className='title'>About</h1>
                            <LineSvg width='100'/>
                        </div>
                        <Talents/>
                        <Profile/>
                    </div>
                </div>
            </Waypoint>
        </div>
    )
}

export default About;