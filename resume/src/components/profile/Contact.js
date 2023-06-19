import ContactList from "./ContactList"

export default function Contact( { heading } ){

    const contactList = [
        {
            label: "Phone",
            value: "7709997669",
            anchor: "tel",
        },
        {
            label: "Email",
            value: "ajajrajguru95@gmail.com",
            anchor: "mailto",
        },
        {
            label: "Address",
            value: "F-284, Salaiwada, Sawantwadi",
            anchor: "#"
        },
    ]

    return(
        <div className="contact mt-16">
            <h2 className="contact__heading uppercase pb-2">{heading}</h2>
            <ContactList items={contactList} />
        </div>
    )
}