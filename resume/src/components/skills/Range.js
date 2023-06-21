
export default function Range( { skills } ){
    const renderedSkills = skills.map((skill) => {
        return (
        <div key={skill.skill} className="skills__list">
            
            <input type="range" value={skill.range} readOnly className="pointer-events-none" />
            <label>{skill.skill}</label>
        </div>
        );
    });
    return (
        <div>
            {renderedSkills}  
        </div>
    )
}