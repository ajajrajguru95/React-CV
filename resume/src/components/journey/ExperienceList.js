import CalendarBlock from "./CalendarBlock"

export default function ExperienceList( { heading } ) {

    const expList = [
        {
            heading: "Technical Lead",
            caption : "Kilowott Pvy Ltd, Porvorim",
            startdate : "2019",
            enddate: "Working",
            info: 'Lorem ipsum dolllar amet'
        },
        {
            heading: "Front-End Developer",
            caption : "Ajency.in, Panjim",
            startdate : "2015",
            enddate: "2019",
            info: 'Lorem ipsum dolllar amet'
        },
        {
            heading: "Jr. Front-End Developer",
            caption : "New visition Imaging, Mapusa",
            startdate : "2013",
            enddate: "2015",
            info: 'Lorem ipsum dolllar amet'
        },
    ]

    return (
        <div className="pl-8 mb-16 pb-16 border-b-2 border-primary">
            <h2 className="uppercase pb-2">{heading}</h2>
            <CalendarBlock items={expList} />
        </div>
    )
}