import Range from "./Range"

export default function Language ( { heading } ){

    const skillist = [
        {
            skill : "English",
            range: 80,
        },
        {
            skill : "Marathi",
            range: 80,
        },
        {
            skill : "Hindi",
            range: 60
        },
    ]

    return (
        <div>
            <h2 className="uppercase pb-2">{heading}</h2>
            <Range skills={skillist} />
        </div>
    )
}