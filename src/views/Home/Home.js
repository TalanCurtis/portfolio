import React, {Component} from 'react';
//Component Imports 
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Intro from '../../components/Intro/Intro';
import Portfolio from '../../components/Portfolio/Portfolio';
import Skills from '../../components/Skills/Skills';

// libraries
import {TweenLite} from 'gsap';
import scrollToComponent from 'react-scroll-to-component';

class Home extends Component{ 
    constructor(){
        super();
        this.handleScroll= this.handleScroll.bind(this)
    }  

    componentDidMount(){
        // TweenLite.from('.Home', 1, {opacity:0})
    }

    handleScroll(section){
        console.log(section)
        scrollToComponent(this[section], { offset: -59, align: 'top', duration: 1000,  ease:'inOutExpo'})
    }


    render(){
        return(
            <div className="Home">
                 <Nav handleScroll={this.handleScroll}/>
                 <section ref={(section) => { this.Intro = section; }}>
                    <Intro  handleScroll={this.handleScroll}/>
                 </section>
                 <section ref={(section) => { this.About = section; }}>
                    <About/>
                 </section>
                 <section ref={(section) => { this.Skills = section; }}>
                    <Skills/>
                 </section>
                 <section ref={(section) => { this.Portfolio = section; }}>
                    <Portfolio/>
                 </section>
                 <section ref={(section) => { this.Contact = section; }}>
                    <Contact />
                 </section>
                 <section ref={(section) => { this.Footer = section; }}>
                    <Footer handleScroll={this.handleScroll}/>  
                 </section>
            </div>
        )
    }
}

export default Home;