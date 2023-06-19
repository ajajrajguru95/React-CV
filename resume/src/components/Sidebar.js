import ProfileCard from "./profile/ProfileCard";
import Myself from '../assets/img/me.jpg';
import Contact from "./profile/Contact";
import Info from "./profile/Info";
import HardSkills from "./skills/HardSkills";

export default function Sidebar() {

    // Profile Config
    const profile = {
        name: 'Ajaj Rajguru',
        desg : 'Technical Lead',
        picture : Myself,
    }

    return (
        <>

            {/* Profile Card */}
            <ProfileCard details={profile} />

            {/* Contact Info */}
            <Contact heading="Contact me" />

            {/* Info */}
            <Info>
                <h3>
                    Hello
                </h3>
                <p>
                    Lorem ipsum dollar amet sit amet testing message. Lorem ipsum dollar amet sit amet testing message. Lorem ipsum dollar amet sit amet testing message. Lorem ipsum dollar amet sit amet testing message. 
                </p>
            </Info>

            <HardSkills heading="Hard Skills" />

           

            
        </>
    )
}