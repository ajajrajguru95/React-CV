import CalendarBlock from "./CalendarBlock"

export default function ExperienceList( { heading } ) {

    const expList = [
        {
            heading: "Technical Lead",
            caption : "Kilowott Pvy Ltd, Porvorim",
            startdate : "2019",
            enddate: "",
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
        <div className="">
            <h2>{heading}</h2>
            <CalendarBlock items={expList} />
        </div>
    )
}