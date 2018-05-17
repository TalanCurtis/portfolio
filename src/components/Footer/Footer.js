import React from 'react';

function Footer (props){    
        return(
            <div className="Footer">
                 Footer comp 
                 <button onClick={()=>props.handleScroll('Intro')}>Back to Top </button>
            </div>
        )
}

export default Footer;