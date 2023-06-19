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
        <div className="">
            <h2>{heading}</h2>
            <CalendarBlock items={eduList} />
        </div>
    )
}