import CalendarBlock from "./CalendarBlock"

export default function EducationList( { heading } ) {

    const eduList = [
        {
            heading: "BSc Computer Science",
            caption : "Mumbai University",
            startdate : "2010",
            enddate: "2013",
            info: ''
        },
        
    ]

    return (
        <div className="pl-8 mb-16 pb-16 border-b-2 border-primary">
            <h2 className="uppercase pb-2">{heading}</h2>
            <CalendarBlock items={eduList} />
        </div>
    )
}