
export default function ContactList( { items } ){

    const fetchedItems = items.map((item) => {
        return (
            <div key={item.label} className="border-b border-primary pb-3 mb-3">
                <label className="text-primary font-semibold block">{item.label}</label>
                <a href={item.label !== 'Address' ? `${item.anchor}:${item.value}` : item.anchor}>{item.value}</a>
            </div>
        )
    });

    return (
        <div className="contact__list max-w-[250px] mx-auto">
            {fetchedItems}
        </div>
    )
}