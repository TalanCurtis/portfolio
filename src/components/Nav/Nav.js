import React from 'react';
import $ from 'jquery';

import LogoSvg from '../../images/LogoSvg';
import BurgerSvg from '../../images/BurgerSvg';

function Nav(props) {
    $(window).scroll(function () {
            // Get position of components then subtract header height to change active state.
            let about = document.getElementsByClassName("About")[0].offsetTop - 60 ;
            let portfolio = document.getElementsByClassName("Portfolio")[0].offsetTop - 60 ;
            let contact = document.getElementsByClassName("Contact")[0].offsetTop - 60 ;
            let skills = document.getElementsByClassName("Skills")[0].offsetTop - 60 ;
            let scroll = $(window).scrollTop();
            switch (true) {
                case scroll>=contact:
                    $(".contact").addClass("active")
                    $(".portfolio, .about, .intro, .skills" ).removeClass("active")
                ;break;
                case scroll>=portfolio: 
                    $(".portfolio").addClass("active")
                    $(".contact, .about, .intro, .skills").removeClass("active")
                ;break;
                case scroll>=skills: 
                    $(".skills").addClass("active")
                    $(".portfolio, .contact, .intro, .about").removeClass("active")
                ;break;
                case scroll>=about: 
                    $(".about").addClass("active")
                    $(".portfolio, .contact, .intro, .skills").removeClass("active")
                ;break;
                case scroll>=0: 
                    $(".intro").addClass("active")
                    $(".portfolio, .about, .contact, .skills").removeClass("active")
                ;break;
                default:
                    console.log('scrolling',scroll, 'about',about, 'por', portfolio, 'cont', contact)
                    break;
            }
        });

    return (
        <div className="Nav">
            <div className='logo-containter' onClick={() => props.handleScroll('Intro')}>
                <LogoSvg height='60px' width='60px' />
                <h1>Alan Curtis</h1>
            </div>
            <div className='buttons'>
                <h3 className="intro active" onClick={() => props.handleScroll('Intro')}>Home</h3>
                <h3 className="about" onClick={() => props.handleScroll('About')}>About</h3>
                <h3 className="skills" onClick={() => props.handleScroll('Skills')}>Skills</h3>
                <h3 className="portfolio" onClick={() => props.handleScroll('Portfolio')}>Portfolio</h3>
                <h3 className="contact" onClick={() => props.handleScroll('Contact')}>Contact</h3>
            </div>
            <BurgerSvg className="BurgerSvg" height="40px" width="40px"/>
        </div>
    )
}

export default Nav;