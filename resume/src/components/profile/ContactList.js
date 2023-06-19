
export default function ContactList( { items } ){

    const fetchedItems = items.map((item) => {
        return (
            <div key={item.label}>
                <label className="text-primary flex">{item.label}</label>
                <a href={item.label !== 'Address' ? `${item.anchor}:${item.value}` : item.anchor}>{item.value}</a>
            </div>
        )
    });

    return (
        <div className="contact__list">
            {fetchedItems}
        </div>
    )
}