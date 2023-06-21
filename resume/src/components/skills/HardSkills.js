import Skills from "./Skills";
import { DiCss3, DiHtml5, DiJavascript1, DiBootstrap } from 'react-icons/di';


export default function HardSkills( { heading } ) { 

    const skillist = [
        {
            icon : DiHtml5,
            skill : "HTML5"
        },
        {
            icon : DiCss3,
            skill : "CSS3"
        },
        {
            icon : DiJavascript1,
            skill : "Javacript"
        },
        {
            icon : DiBootstrap,
            skill : "Bootstrap"
        },
    ]

    return (
        <div className="mt-12">
            <h2 className="uppercase pb-2">{heading}</h2>
            <Skills skills={skillist} />
        </div>
    )
 }