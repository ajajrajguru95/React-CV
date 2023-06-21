import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
import SoftSkills from "../skills/SoftSkills";
import Language from "../skills/Language";

export default function MainBlock () {
    return (
        <>
            <ExperienceList heading="Work Experiences" />
            <EducationList heading="My Education" />
            <div className="pl-8 flex ">
                <SoftSkills heading="Soft Skills" />
                <Language heading="Languages" />
            </div>
        </>
    )
}