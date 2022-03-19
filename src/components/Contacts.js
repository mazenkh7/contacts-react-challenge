import Contact from "./Contact";

function Contacts({contacts, onDelete,click, doubleClick}) {
    return (
        <>
            {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} onDelete = {onDelete} doubleClick={doubleClick} onClick={click}/>
            ))}
        </>
    );
}

export default Contacts;