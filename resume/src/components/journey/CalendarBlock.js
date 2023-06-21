
export default function CalendarBlock ( { items } ) {

    const renderedexpList = items.map((item) => {
        return(
            <div key={item.heading} className="expList__lists [&:not(:last-child)]:mb-8">
                <h3 className="capitalize">{item.heading}</h3>
                <p className="mb-4">{item.caption}</p>
                <div className="flex">
                    <div className="calendar flex flex-col min-w-[55px] max-w-[80px] items-center border border-primary">
                        <span className="p-1  bg-primary text-white w-full text-center">{item.enddate}</span>
                        <span className="p-1 text-primary w-full text-center">{item.startdate}</span>
                    </div>
                    <div className="expList__desc pl-5">
                        <p>{item.info}</p>
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