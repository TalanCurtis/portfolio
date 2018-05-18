import React from 'react';
import Engineer_SVG from '../../images/Engineer_SVG';
import Artist_SVG from '../../images/Artist_SVG';
import Animator_SVG from '../../images/Animator_SVG';

function About (){    
        console.log('component mounted')
        return(
            <div className="About">
                <h1>About</h1>
                <div className='talents'>
                    <div className='engineer'>
                        <Engineer_SVG height='100px' width='100px'/>
                        <h2>Engineer</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolor eligendi natus quaerat iure animi.
                        </p>
                    </div>
                    <div className='artist'>
                        <Artist_SVG height='100px' width='100px'/>
                        <h2>Artist</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolor eligendi natus quaerat iure animi.
                        </p>
                    </div>
                    <div className='animator'>
                        <Animator_SVG height='100px' width='100px'/>
                        <h2>Animator</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolor eligendi natus quaerat iure animi.
                        </p>
                    </div>
                </div>
                <div className='me'>
                    <img src="/images/Alan_01.jpg" alt="photo" />
                    <h2>About me</h2>
                    <p> 
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nostrum, totam iste modi quos fugit soluta earum laborum repellendus est! Ad voluptates sequi veniam beatae eveniet, nulla modi tempore ut, mollitia optio placeat? Odit beatae perferendis repellendus quibusdam omnis corporis!
                    </p>
                 </div>
                 <div className='skills'>
                        <h3>Skills</h3>
                         <div className='coding'>
                             <h4>Coding</h4>
                             <div className='coding-skills'>
                                 <div style={{background:'green', height:'60px', width:'60px'}}> skill 1</div>
                                 <div style={{background:'green', height:'60px', width:'60px'}}> skill 1</div>
                                 <div style={{background:'green', height:'60px', width:'60px'}}> skill 1</div>
                                 <div style={{background:'green', height:'60px', width:'60px'}}> skill 1</div>
                             </div>
                     </div>
                 </div>
            </div>
        )
}

export default About;