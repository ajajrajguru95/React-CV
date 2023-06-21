
export default function Skills( { skills } ) {

    const renderedSkills = skills.map((skill) => {
        return (
        <div key={skill.skill} className="skills__list ">
            {skill.icon ? <skill.icon /> : <span className="custom-icon"></span> }
            
            <label>{skill.skill}</label>
        </div>
        );
    });

    return (
        <>
          {renderedSkills}  
        </>
    )
}