
export default function Skills( { skills } ) {

    const renderedSkills = skills.map((skill) => {
        return (
        <div key={skill.skill} className="skills__list [&:not(:last-child)]:mb-5">
            {skill.icon ? <skill.icon className="mx-auto w-[40px] h-auto aspect-square text-primary" /> : <span className="custom-icon"></span> }
            
            <label className="capitalize text-primary text-sm">{skill.skill}</label>
        </div>
        );
    });

    return (
        <>
          {renderedSkills}  
        </>
    )
}