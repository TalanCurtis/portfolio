import React from 'react';
import content from '../../content.json';
import SkillCard from '../SkillCard/SkillCard';

function Skills (props){   
        const programming = content.skills.programming.cards.map((x,i)=>(
            <SkillCard key={i} title={x.title} image={x.image}/>
        ))
        const art = content.skills.art.cards.map((x,i)=>(
            <SkillCard key={i} title={x.title} image={x.image}/>
        ))

        return(
            <div className="Skills">
                <div className="container">
                    <h2>Skills</h2>
                    <h3>Programming</h3>
                    <div className="programming">
                        {programming}
                    </div>
                    <h3>Art</h3>
                    <div className="art">
                        {art}
                    </div>
                </div>
            </div>
        )
}

export default Skills;