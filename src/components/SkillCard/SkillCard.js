import React from 'react';

function SkillCard (props){    
        return(
            <div className="SkillCard">
                <img src={`/images/icons/${props.image}`} alt={props.image}/>
                <h4>{props.title}</h4>
            </div>
        )
}

export default SkillCard;