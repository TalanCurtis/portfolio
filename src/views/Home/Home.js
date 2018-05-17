import React, {Component} from 'react';
//Component Imports 
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Intro from '../../components/Intro/Intro';
import Portfolio from '../../components/Portfolio/Portfolio';

class Home extends Component{    
    render(){
        return(
            <div className="Home">
                 <Intro/>
                 <Nav/>
                 <About/>
                 <Portfolio/>
                 <Contact/>
                 <Footer/>
            </div>
        )
    }
}

export default Home;