import React from 'react';
import $ from 'jquery';

import Logo_SVG from '../../images/Logo_SVG';
import Burger_SVG from '../../images/Burger_SVG';

function Nav(props) {
    $(window)
    .scroll(function () {
            // Get position of components then subtract header height to change active state.
            let about = document.getElementsByClassName("About")[0].offsetTop - 60 ;
            let portfolio = document.getElementsByClassName("Portfolio")[0].offsetTop - 60 ;
            let contact = document.getElementsByClassName("Contact")[0].offsetTop - 60 ;
            let scroll = $(window).scrollTop();
            switch (true) {
                case scroll>=contact:
                    $(".contact").addClass("active")
                    $(".portfolio, .about, .intro" ).removeClass("active")
                ;break;
                case scroll>=portfolio: 
                    $(".portfolio").addClass("active")
                    $(".contact, .about, .intro").removeClass("active")
                ;break;
                case scroll>=about: 
                    $(".about").addClass("active")
                    $(".portfolio, .contact, .intro").removeClass("active")
                ;break;
                case scroll>=0: 
                    $(".intro").addClass("active")
                    $(".portfolio, .about, .contact").removeClass("active")
                ;break;
                default:
                    console.log('scrolling',scroll, 'about',about, 'por', portfolio, 'cont', contact)
                    break;
            }
        });
    function highlightActive() {
        // var div = document.getElementsByClassName("About");
        // var rect = div.getBoundingClientRect();
        // alert("Coordinates: " + rect.left + "px, " + rect.top + "px");
        let section = document.getElementsByClassName("Portfolio");
        console.log(section)
        let currentScrollPosition = document.documentElement.scrollTop
        console.log(currentScrollPosition)
    }
    return (
        <div className="Nav">
            <div className='logo-containter' onClick={() => props.handleScroll('Intro')}>
                <Logo_SVG height='60px' width='60px' />
                <h1>Alan Curtis</h1>
            </div>
            <div className='buttons'>
                <h3 className="intro active" onClick={() => props.handleScroll('Intro')}>Home</h3>
                <h3 className="about" onClick={() => props.handleScroll('About')}>About</h3>
                <h3 className="portfolio" onClick={() => props.handleScroll('Portfolio')}>Portfolio</h3>
                <h3 className="contact" onClick={() => props.handleScroll('Contact')}>Contact</h3>
            </div>
            <Burger_SVG className="Burger_SVG" height="40px" width="40px"/>
        </div>
    )
}

export default Nav;