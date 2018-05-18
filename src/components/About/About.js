import React from 'react';
import EngineerSvg from '../../images/EngineerSvg';
import ArtistSvg from '../../images/ArtistSvg';
import AnimatorSvg from '../../images/AnimatorSvg';

function About (){    
        console.log('component mounted')
        return(
            <div className="About">
                <h1>About</h1>
                <div className='talents'>
                    <div className='engineer'>
                        <EngineerSvg height='100px' width='100px'/>
                        <h2>Engineer</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolor eligendi natus quaerat iure animi.
                        </p>
                    </div>
                    <div className='artist'>
                        <ArtistSvg height='100px' width='100px'/>
                        <h2>Artist</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolor eligendi natus quaerat iure animi.
                        </p>
                    </div>
                    <div className='animator'>
                        <AnimatorSvg height='100px' width='100px'/>
                        <h2>Animator</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolor eligendi natus quaerat iure animi.
                        </p>
                    </div>
                </div>
                <div className='me'>
                    <img src="/images/Alan_01.jpg" alt="profile" />
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