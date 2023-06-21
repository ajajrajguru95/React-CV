import Skills from "./Skills";


export default function SoftSkills( { heading } ) { 

    const skillist = [
        {
            icon : '',
            skill : "Teamwork"
        },
        {
            icon : '',
            skill : "Leadership"
        },
        {
            icon : '',
            skill : "Team Management"
        },
        {
            icon : '',
            skill : "Goal oriented"
        },
    ]

    return (
        <div>
            <h2 className="uppercase pb-2">{heading}</h2>
            <Skills skills={skillist} />
        </div>
    )
 }