import React from 'react';
import EngineerSvg from '../../images/EngineerSvg';
import ArtistSvg from '../../images/ArtistSvg';
import AnimatorSvg from '../../images/AnimatorSvg';

function Talents(props) {
    return (
        <div className="Talents">
            <div className='engineer'>
                <EngineerSvg height='100px' width='100px'/>
                <h2>Engineer</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolor eligendi
                    natus quaerat iure animi.
                </p>
            </div>
            <div className='artist'>
                <ArtistSvg height='100px' width='100px'/>
                <h2>Artist</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolor eligendi
                    natus quaerat iure animi.
                </p>
            </div>
            <div className='animator'>
                <AnimatorSvg height='100px' width='100px'/>
                <h2>Animator</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolor eligendi
                    natus quaerat iure animi.
                </p>
            </div>
        </div>
    )
}

export default Talents;