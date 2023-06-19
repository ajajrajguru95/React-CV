
export default function CalendarBlock ( { items } ) {

    const renderedexpList = items.map((item) => {
        return(
            <div key={item.heading} className="expList__lists">
                <h3>{item.heading}</h3>
                <p>{item.caption}</p>
                <div className="flex">
                    <div className="calendar flex flex-col">
                        <span>{item.enddate}</span>
                        <span>{item.startdate}</span>
                    </div>
                    <div className="expList__desc">
                        {item.info}
                    </div>
                </div>
            </div>
        )
    });

    return (
        <>
        {renderedexpList}
        </>
    )
}