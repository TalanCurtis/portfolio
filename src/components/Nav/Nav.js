import React, {Component} from 'react';
import scrollToComponent from 'react-scroll-to-component';

function Nav (props){ 
        return(
            <div className="Nav">
                 <button className="contact" onClick={()=>props.handleScroll('Intro')}>Home</button>
                 <button className="contact" onClick={()=>props.handleScroll('About')}>About</button>
                 <button className="contact" onClick={()=>props.handleScroll('Portfolio')}>Portfolio</button>
                 <button className="contact" onClick={()=>props.handleScroll('Contact')}>Contact</button>
            </div>
        )
}

export default Nav;