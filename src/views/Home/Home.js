import React, {Component} from 'react';
//Component Imports 
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Intro from '../../components/Intro/Intro';
import Portfolio from '../../components/Portfolio/Portfolio';

// libraries
import scrollToComponent from 'react-scroll-to-component';

class Home extends Component{ 
    constructor(){
        super();
        this.handleScroll= this.handleScroll.bind(this)
    }  

    handleScroll(section){
        console.log(section)
        scrollToComponent(this[section], { offset: -60, align: 'top', duration: 1000,  ease:'inOutExpo'})
    }

    render(){
        return(
            <div className="Home">
                 <section ref={(section) => { this.Intro = section; }}>
                    <Intro/>
                 </section>
                 <Nav handleScroll={this.handleScroll}/>
                 <section ref={(section) => { this.About = section; }}>
                    <About/>
                 </section>
                 <section ref={(section) => { this.Portfolio = section; }}>
                    <Portfolio/>
                 </section>
                 <section ref={(section) => { this.Contact = section; }}>
                    <Contact />
                 </section>
                 <section ref={(section) => { this.Footer = section; }}>
                    <Footer/>  
                 </section>
            </div>
        )
    }
}

export default Home;